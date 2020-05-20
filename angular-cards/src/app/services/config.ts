import { HttpHeaders } from "@angular/common/http";

export class HttpConfig {
  urlBase: string = "api/";
  headers = new HttpHeaders({ "Content-Type": "application/json" });
  constructor() {}
}
