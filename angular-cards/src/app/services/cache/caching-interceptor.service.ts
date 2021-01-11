import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpResponse,
  HttpInterceptor,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, timeout } from 'rxjs/operators';
import { RequestCache } from './request-cache.service';
import { Store } from '@ngrx/store';
import { NotificationsService } from '../notifications.service';
import {
  decrementLoading,
  incrementLoading,
} from 'src/app/store/actions/StateActions';
import { WarnMessage } from 'src/app/models/Notification';

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
    //if (req.method == "POST" || req.method == "PUT") return next.handle(req); //put and post requests are not cached
    return this.sendRequest(req, next, this.cache); //skip interception cos not work

    let cachedObject = this.cache.get(req); //get the cached response
    const response: HttpResponse<any> = cachedObject?.response; //get the response from the cachedObject
    const expired: boolean = cachedObject?.expired;
    let response$ = of(response);
    response$.subscribe((data) => {
      console.log(req.url, data?.body);
    });
    if (response && !expired) return response$;
    //return observable of response
    //no cached response or response expired
    else return this.sendRequest(req, next, this.cache, response);
  }

  //sends a request to the server
  private sendRequest(
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
          if (req.method == 'GET' && event.status == 200) cache.put(req, event); //only cache valid get requests
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
          'Der Server ist offline, die Karten werden aus lokalem Speicher geladen'
        )
      );
      return of(cachedResp);
    }
    this.notifs.handleErrors(error); //make a notification for error
    // Return an observable with error message.
    return throwError('Ein unbekannter Fehler ist aufgetreten');
  }
}
