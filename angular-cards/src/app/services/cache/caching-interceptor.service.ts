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
import { catchError, delay, map, shareReplay, tap, timeout } from 'rxjs/operators';
import { RequestCache } from './request-cache.service';
import { NotificationsService } from '../notifications.service';
import { WarnMessage } from 'src/app/models/Notification';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cache: RequestCache, private notifs: NotificationsService) {}
  //intercepts the current http call to check if the request has already been cached
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== 'GET') return next.handle(req); //put and post requests are not cached
    // return this.sendRequest(req, next, this.cache); //skip interception cos not work

    let cachedObject = this.cache.get(req); //get the cached response
    let response: HttpResponse<any> = cachedObject?.response; //get the response from the cachedObject
    let expired: boolean = cachedObject?.expired;

    if (!cachedObject || expired) {
      return this.sendRequest(req, next, this.cache, response);
    }

    let res$ = of(response);
    // res$.subscribe((res) => console.log(res)); //here response is logged, but subscribers outside this function dont receive it
    return res$;
  }

  //sends a request to the server
  private sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: RequestCache,
    cachedResp?: HttpResponse<any>
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          if (req.method === 'GET' && event.status == 200) cache.put(req, event); //only cache valid get requests
        }
      }),
      catchError((err) => this.handleError(err, cachedResp))
    );
  }

  //handle http errors
  private handleError(error: HttpErrorResponse, cachedResp: HttpResponse<any>): Observable<HttpEvent<any>> {
    if (cachedResp && error.status >= 500) {
      //server error but data was cached
      this.notifs.addNotification(
        new WarnMessage('Der Server ist offline, die Karten werden aus lokalem Speicher geladen')
      );
      return of(cachedResp).pipe(shareReplay(1));
    }
    this.notifs.handleErrors(error); //make a notification for error
    // Return an observable with error message.
    return throwError('Ein unbekannter Fehler ist aufgetreten');
  }
}
