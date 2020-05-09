import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  
} from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import {tap} from "rxjs/operators"

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
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  //Cards
  getCardsFromLecture(lecture: Vorlesung): Observable<HttpResponse<Card[]>> {
    return this.http.get<Card[]>(
      this.urlBase + "getCards/?abrv=" + lecture.abrv,
      { observe: "response" }
    );
  }

  addCard(card: Card, vlAbrv: string): Observable<HttpResponse<any>> {
    //Cards müssen richtig im Frontend definiert werden
    return this.http.post<any>(
      this.urlBase + "addCard",
      { card: card, abrv: vlAbrv },
      this.httpOptions
    );
  }
  updateCard(card: Card): Observable<HttpResponse<any>> {
    return this.http.put<any>(
      this.urlBase + "updateCard",
      { card: card },
      {
        headers: this.httpOptions.headers,
        observe: "response",
      }
    );
  }

  //Lectures
  getAllLectures(): Observable<HttpResponse<Vorlesung[]>> {
    return this.http.get<Vorlesung[]>(this.urlBase + "getAllLectures", {
      observe: "response",
    });
  }

  addLecture(lecture: Vorlesung): Observable<HttpResponse<any>> {
    return this.http.post<any>(
      this.urlBase + "addLecture",
      { lecture: lecture },
      {
        headers: this.httpOptions.headers,
        observe: "response",
      }
    );
  }

  getLectureByAbrv(abrv: string): Observable<HttpResponse<Vorlesung>> {
    return this.http.get<Vorlesung>(this.urlBase + "getLecture?abrv=" + abrv, {
      headers: this.httpOptions.headers,
      observe: "response",
    });
  }

  //User
  login(form): Observable<HttpResponse<User>> {
    return this.http.post<User>(this.urlBase + "login", form, {
      headers: this.httpOptions.headers,
      observe: "response",
    }).pipe(tap(res=>{
      this.user=res.body
      if(form.remember){
        localStorage.setItem('user',JSON.stringify(this.user))
      }
     
    }));
  }
  
  getUser(): User {
    if(!this.user){
      this.user=JSON.parse(localStorage.getItem("user"))
    }
    return this.user;
  }
  logout() {
    this.http.get<any>(this.urlBase + "logout").subscribe((err) => {
      if (err) console.log(err);
    });
    localStorage.removeItem("user")
    this.user = null;
  }

  //form = {username,email,password}
  createAccount(form): Observable<HttpResponse<User>> {
    return this.http.post<User>(this.urlBase + "createAccount", form, {
      headers: this.httpOptions.headers,
      observe: "response",
    }).pipe(tap(res=>this.user=res.body))
    
  }
}