import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Card} from '../models/Card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  url:string = 'http://localhost/cards';

  constructor(private http:HttpClient) { }

  // getCards():Observable<Card[]>{
  //   return this.http.get<Card[]>(this.url); 
  // }

  
}
