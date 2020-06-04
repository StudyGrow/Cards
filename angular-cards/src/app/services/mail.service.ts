import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { HttpConfig } from './config';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class MailService {
  private config = new HttpConfig();

  tokenCheckStatus: any = 2
  tokenCheckStatusUpdated= new Subject<any>()

  constructor(
    private http: HttpClient, //for sending http requests
    private route: ActivatedRoute
  ) {}

  confirmAccount(){
    if(this.route.snapshot.queryParams.token != undefined){
      let token = this.route.snapshot.queryParams.token
      this.http
      .get<any>(this.config.urlBase + "mail/confirmation?token=" + token, {
        observe: "response",
      })
      .subscribe(
        (res) => {
          console.log(res.body.confirmed)
          switch (res.body.confirmed) {
            case "true":
              this.tokenCheckStatus = 1;
              this.tokenCheckStatusUpdated.next(this.tokenCheckStatus)
              break;
            case "false":
              this.tokenCheckStatus = 0;
              this.tokenCheckStatusUpdated.next(this.tokenCheckStatus)
              break;
            default:
              console.log("DEFAULT")
              break;
          }
        },
        (error) => {
        }
      );
    }
  }

  getTokenCheckStatusUpdateListener(){
    return this.tokenCheckStatusUpdated.asObservable();
  }

}
