import { Injectable } from "@angular/core";
import { HttpRequest, HttpResponse } from "@angular/common/http";

const maxAge = 180000; //3min
@Injectable({
  providedIn: "root",
})
export class RequestCache {
  cache = new Map();
  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    if (url.match(/cards/) || url.match(/lectures/)) {
      const entry = { url, response, fetched: Date.now() };
      localStorage.setItem(url, JSON.stringify(entry));
    }
  }
  get(
    req: HttpRequest<any>
  ): { response: HttpResponse<any>; expired: boolean } | undefined {
    const url = req.urlWithParams;
    let cached = localStorage.getItem(url);

    if (!cached) return undefined;
    let cacheObject = JSON.parse(cached);

    const isExpired = cacheObject.fetched < Date.now() - maxAge;

    return { response: cacheObject.response, expired: isExpired };
  }

  remove(url: string) {
    localStorage.removeItem(url);
  }
  clear() {
    localStorage.clear();
  }
}
