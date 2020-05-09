import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, BehaviorSubject, of } from "rxjs";
import { tap, map } from "rxjs/operators";
import { StatesService } from "./states.service";
import { Router } from "@angular/router";
//Models
import { User } from "../models/User";
import { Card } from "../models/Card";
import { Vorlesung } from "../models/Vorlesung";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private urlBase: string = "api/";
  private user: User;
  private lecture$: BehaviorSubject<Vorlesung>; //holds the current lecture
  private lectures$: BehaviorSubject<Vorlesung[]>; //holds all lectures
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private statesService: StatesService,
    private router: Router
  ) {}

  //Cards
  getCardsFromLectureAbrv(abrv: string): Observable<HttpResponse<any[]>> {
    this.statesService.setLoadingState(true);
    {
      return this.http
        .get<Card[]>(this.urlBase + "cards/?abrv=" + abrv, {
          observe: "response",
        })
        .pipe(
          tap((res) => {
            this.statesService.setLoadingState(false);
          })
        );
    }
  }

  addCard(card: Card): Observable<HttpResponse<any>> {
    //Cards müssen richtig im Frontend definiert werden
    let id: string;
    if (this.user) {
      id = this.user.id;
    }
    return this.http.post<any>(
      this.urlBase + "cards/new",
      { card: card, userId: id },
      this.httpOptions
    );
  }
  updateCard(card: Card): Observable<HttpResponse<any>> {
    return this.http.put<any>(
      this.urlBase + "cards/update",
      { card: card },
      {
        headers: this.httpOptions.headers,
        observe: "response",
      }
    );
  }

  //Lectures
  getAllLectures(): Observable<Vorlesung[]> {
    this.statesService.setLoadingState(true);
    if (this.lectures$) {
      this.statesService.setLoadingState(false);
      return this.lectures$.asObservable();
    } else {
      return this.http
        .get<Vorlesung[]>(this.urlBase + "lectures", {
          observe: "response",
        })
        .pipe(
          tap((res) => {
            this.statesService.setLoadingState(false);
            this.lectures$ = new BehaviorSubject<Vorlesung[]>(res.body);
          }),
          map((res) => res.body)
        );
    }
  }
  setCurrentLecture(lecture: Vorlesung) {
    if (this.lecture$) {
      this.lecture$.next(lecture);
    } else {
      this.lecture$ = new BehaviorSubject<Vorlesung>(lecture);
    }
  }
  getCurrentLecture(): Observable<Vorlesung> {
    let abrv = this.router.url.split(/vorlesung\//)[1];
    if (this.lecture$ && this.lecture$.getValue().abrv == abrv) {
      return this.lecture$.asObservable();
    } else {
      return this.http
        .get<Vorlesung>(this.urlBase + "lectures/find?abrv=" + abrv, {
          observe: "response",
        })
        .pipe(
          tap((res) => {
            if (this.lecture$) {
              this.lecture$.next(res.body);
            } else {
              this.lecture$ = new BehaviorSubject<Vorlesung>(res.body);
            }
          }),
          map((res) => res.body)
        );
    }
  }

  addLecture(lecture: Vorlesung): Observable<HttpResponse<any>> {
    this.statesService.setLoadingState(true);
    return this.http
      .post<any>(
        this.urlBase + "lectures/new",
        { lecture: lecture },
        {
          headers: this.httpOptions.headers,
          observe: "response",
        }
      )
      .pipe(
        tap((res) => {
          //add the new lecture to the lectures subject
          this.statesService.setLoadingState(false);
          let lectures = this.lectures$.getValue();
          lectures.push(lecture);
          this.lectures$.next(lectures);
        })
      );
  }

  getLectureByAbrv(abrv: string): Vorlesung {
    if (this.lectures$) {
      let lectures = this.lectures$.getValue();
      for (const lecture of lectures) {
        if (lecture.abrv == abrv) {
          if (this.lecture$) {
            this.lecture$.next(lecture);
          } else {
            this.lecture$ = new BehaviorSubject<Vorlesung>(lecture);
          }

          return lecture;
        }
      }
    } else {
    }
  }

  //User
  login(form): Observable<HttpResponse<User>> {
    this.statesService.setLoadingState(true);
    return this.http
      .post<User>(this.urlBase + "login", form, {
        headers: this.httpOptions.headers,
        observe: "response",
      })
      .pipe(
        tap((res) => {
          this.statesService.setLoadingState(false);
          this.user = res.body;
          if (form.remember) {
            localStorage.setItem("user", JSON.stringify(this.user));
          }
        })
      );
  }

  getUser(): User {
    if (!this.user) {
      this.user = JSON.parse(localStorage.getItem("user"));
    }
    return this.user;
  }
  logout() {
    this.statesService.setLoadingState(true);
    this.http.get<any>(this.urlBase + "user/logout").subscribe((err) => {
      this.statesService.setLoadingState(false);
      if (err) console.log(err);
    });
    localStorage.removeItem("user");
    this.user = null;
  }

  //form = {username,email,password}
  createAccount(form): Observable<HttpResponse<User>> {
    this.statesService.setLoadingState(true);
    return this.http
      .post<User>(this.urlBase + "user/new", form, {
        headers: this.httpOptions.headers,
        observe: "response",
      })
      .pipe(
        tap((res) => {
          this.user = res.body;
          this.statesService.setLoadingState(false);
        })
      );
  }
}
