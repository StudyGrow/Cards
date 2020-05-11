import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
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
  private urlBase: string = "api/"; //url  base on which to adress the server with
  private user: User; //stores the user
  private lecture$: BehaviorSubject<Vorlesung>; //holds the current lecture
  private lectures$: BehaviorSubject<Vorlesung[]>; //holds all lectures

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient, //for sending http requests
    private statesService: StatesService, //set the loading state
    private router: Router //to get info in the current url
  ) {}

  //get Cards for a specific lecture from server
  //This function shoul only be called by the cardsservice to initially load cards from server
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

  //add card to the database on server
  addCard(card: Card): Observable<HttpResponse<any>> {
    return this.http.post<any>(
      this.urlBase + "cards/new",
      { card: card },
      this.httpOptions
    );
  }

  //update card on server
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

  //get an array of all lectures
  getAllLectures(): Observable<Vorlesung[]> {
    this.statesService.setLoadingState(true);
    if (this.lectures$) {
      //lectures were already loaded once
      this.statesService.setLoadingState(false);
      return this.lectures$.asObservable();
    } else {
      //load lectures from the server
      return this.http
        .get<Vorlesung[]>(this.urlBase + "lectures", {
          observe: "response",
        })
        .pipe(
          tap((res) => {
            this.statesService.setLoadingState(false);
            this.lectures$ = new BehaviorSubject<Vorlesung[]>(res.body); //set the lectures subject
          }),
          map((res) => res.body)
        );
    }
  }

  //get the Current lecture
  getCurrentLecture(): Observable<Vorlesung> {
    let abrv = this.router.url.split(/vorlesung\//)[1]; //get the abreviation of the lecture from the url
    if (this.lecture$ && this.lecture$.getValue().abrv == abrv) {
      //the lecture was already loaded
      return this.lecture$.asObservable();
    } else {
      //fetch the lecture from the server
      return this.http
        .get<Vorlesung>(this.urlBase + "lectures/find?abrv=" + abrv, {
          observe: "response",
        })
        .pipe(
          tap((res) => {
            //update or initialize the subject
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

  //add a lecture to the database on the server
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

  //login the user on the server
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
          this.user = res.body; //set the user
          if (form.remember) {
            localStorage.setItem("user", JSON.stringify(this.user)); //store the user locally to keep the session
          }
        })
      );
  }

  getUser(): User {
    if (!this.user) {
      this.user = JSON.parse(localStorage.getItem("user")); //load the user from the local storage
    }
    return this.user;
  }

  //logout the user in front- and backend
  logout() {
    this.statesService.setLoadingState(true);
    this.http.get<any>(this.urlBase + "user/logout").subscribe((err) => {
      this.statesService.setLoadingState(false);
      if (err) console.log(err);
    });
    localStorage.removeItem("user"); //remove the user data from localstorage
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
          this.user = res.body; //login the user (on success)
          this.statesService.setLoadingState(false);
        })
      );
  }
}
