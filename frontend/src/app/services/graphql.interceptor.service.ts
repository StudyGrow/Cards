import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { defer, from, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraphqlInterceptorService implements HttpInterceptor {
  IdToken: string;

  constructor(
    public firebaseAuth: AngularFireAuth // Inject Firebase auth service
  ) {
    this.firebaseAuth.onAuthStateChanged(async (user) => {
      if (!user) return;
      const idToken = await user.getIdToken(true);
      this.IdToken = idToken;
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.getCurrentIdToken()).pipe(
      mergeMap((token) => {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
        return next.handle(req);
      })
    );
  }

  getCurrentIdToken() {
    return new Promise((resolve, reject) => {
      this.firebaseAuth.onIdTokenChanged(async (user) => {
        if (user) {
          user.getIdToken().then((token) => {
            resolve(token);
          });
        } else {
          resolve(null);
        }
      }, reject);
    });
  }
}
