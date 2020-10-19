import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpResponse,
  HttpInterceptor,
  HttpHandler,
  HttpErrorResponse,
} from "@angular/common/http";
import { WarnMessage } from "../models/Notification";
import { combineLatest, from, Observable, of, throwError } from "rxjs";
import { catchError, delay, map, shareReplay, tap } from "rxjs/operators";
import { RequestCache } from "./request-cache.service";
import { Store } from "@ngrx/store";
import { incrementLoading, decrementLoading } from "../store/actions/actions";
import { NotificationsService } from "../services/notifications.service";

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(
    private cache: RequestCache,
    private store: Store,
    private notifs: NotificationsService
  ) {}
  //intercepts the current http call to check if the request has already been cached
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method == "POST" || req.method == "PUT") {
      return next.handle(req); //put and post requests are not cached
    } else {
      const cachedObject = this.cache.get(req); //get the cached response
      let response: HttpResponse<any>;
      response = cachedObject?.response; //get the response from the cachedObject
      if (response && !cachedObject.expired) return of(response); //return observable of response

      //no cached response or response expired
      return this.sendRequest(req, next, response);
    }
  }

  //sends a request to the server
  private sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cachedResp?: HttpResponse<any>
  ): Observable<HttpEvent<any>> {
    this.store.dispatch(incrementLoading());
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.store.dispatch(decrementLoading());
          if (req.method == "GET" && event.status == 200)
            this.cache.put(req, event); //only cache valid get requests
        }
      }),
      catchError((err) => this.handleError(err, cachedResp))
    );
  }

  //handle http errors
  private handleError(
    error: HttpErrorResponse,
    cachedResp: HttpResponse<any>
  ): Observable<HttpEvent<any>> {
    this.store.dispatch(decrementLoading());

    if (cachedResp && error.status >= 500) {
      //server error but data was cached
      this.notifs.addNotification(
        new WarnMessage(
          "Der Server ist offline, die Karten werden aus lokalem Speicher geladen"
        )
      );
      return of(cachedResp);
    }
    this.notifs.handleErrors(error); //make a notification for error
    // Return an observable with error message.
    return throwError("Ein unbekannter Fehler ist aufgetreten");
  }
}
