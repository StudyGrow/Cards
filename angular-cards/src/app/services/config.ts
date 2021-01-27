import { HttpHeaders } from '@angular/common/http';

export class HttpConfig {
  urlBase: string = 'api/';
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  fileHeaders = new Headers(); //configure headers for file upload here
  constructor() {}
}
