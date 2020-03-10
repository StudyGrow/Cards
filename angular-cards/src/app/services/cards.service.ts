import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Card } from "../models/Card";

@Injectable({
  providedIn: "root"
})
export class CardsService {
  private url: string = "http://localhost/cards/BuK";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) {}

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.url);
  }
  addCard(card: Card): Observable<any> {
    return this.http.post<any>(this.url, this.httpOptions);
  }
}
