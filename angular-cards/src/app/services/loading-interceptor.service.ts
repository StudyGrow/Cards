import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpResponse,
  HttpRequest,
  HttpHandler,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { map, filter, tap, timeout } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { decrementLoading, incrementLoading } from "../store/actions/actions";
import { NotificationsService } from "./notifications.service";

@Injectable({
  providedIn: "root",
})
export class LoadingInterceptorService implements HttpInterceptor {
  constructor(private store: Store, private notifs: NotificationsService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log("increment. req: ", req.url);
    this.store.dispatch(incrementLoading());
    return next.handle(req).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            // console.log("decrement. req: ", req.url);
            this.store.dispatch(decrementLoading());
          }
        },
        (err) => {
          this.notifs.handleErrors(err);

          this.store.dispatch(decrementLoading());
        }
      )
    );
  }
}
