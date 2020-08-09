import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpResponse,
  HttpInterceptor,
  HttpHandler,
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { RequestCache } from "./request-cache.service";
import { Store } from "@ngrx/store";
import { incrementLoading, decrementLoading } from "../store/actions/actions";

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cache: RequestCache, private store: Store) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const cachedResponse = this.cache.get(req);
    return cachedResponse
      ? of(cachedResponse)
      : this.sendRequest(req, next, this.cache);
  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: RequestCache
  ): Observable<HttpEvent<any>> {
    this.store.dispatch(incrementLoading());
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.store.dispatch(decrementLoading());
          cache.put(req, event);
        }
      })
    );
  }
}
