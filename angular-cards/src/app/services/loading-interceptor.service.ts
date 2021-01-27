import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, tap, timeout } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { decrementLoading, incrementLoading } from '../store/actions/StateActions';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root',
})
export class LoadingInterceptorService implements HttpInterceptor {
  constructor(private store: Store, private notifs: NotificationsService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let showLoading = !req.url.includes('vote');
    let isLoading = false;
    if (showLoading) {
      this.store.dispatch(incrementLoading());
      isLoading = true;
    }

    return next.handle(req).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            if (showLoading && isLoading) {
              this.store.dispatch(decrementLoading());
              isLoading = false;
            }
          }
        },
        (err) => {
          this.notifs.handleErrors(err);
          if (showLoading && isLoading) {
            this.store.dispatch(decrementLoading());
            isLoading = false;
          }
        }
      )
    );
  }
}
