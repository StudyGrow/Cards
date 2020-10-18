import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpResponse,
  HttpInterceptor,
  HttpHandler,
  HttpErrorResponse,
} from "@angular/common/http";
import { combineLatest, from, Observable, of, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
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

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method == "POST" || req.method == "PUT") {
      return next.handle(req); //put and post requests are not cached
    } else {
      const cachedResponse = this.cache.get(req);
      if (cachedResponse && !cachedResponse.expired) {
        console.log("loading from cache");
        return of(cachedResponse.response);
      } else {
        //no cached response or response expired
        return this.sendRequest(
          req,
          next,
          this.cache,
          cachedResponse?.response
        );
      }
    }
  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: RequestCache,
    cachedResp?: HttpResponse<any>
  ): Observable<HttpEvent<any>> {
    this.store.dispatch(incrementLoading());
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.store.dispatch(decrementLoading());
          if (req.method == "GET") cache.put(req, event); //only cache get requests
        }
      }),

      catchError((err) => this.handleError(err, cachedResp))
    );
  }

  private handleError(
    error: HttpErrorResponse,
    cachedResp: HttpResponse<any>
  ): Observable<HttpEvent<any>> {
    this.store.dispatch(decrementLoading());
    this.notifs.handleErrors(error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      //console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      if (error.status >= 500) {
        return of(cachedResp);
      }
    }
    // Return an observable with a user-facing error message.
    return throwError("Ein unbekannter Fehler ist aufgetreten");
  }
}
