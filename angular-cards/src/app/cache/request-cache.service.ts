import { Injectable } from "@angular/core";
import { HttpRequest, HttpResponse } from "@angular/common/http";

const maxAge = 180000; //3min
@Injectable({
  providedIn: "root",
})
export class RequestCache {
  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    if (url.match(/cards/) || url.match(/lectures/)) {
      const entry = { url, response, fetched: Date.now() };
      try {
        localStorage.setItem(url, JSON.stringify(entry));
      } catch (error) {
        console.log(error);
      }
    }
  }

  //returns cached lectures or cards or undefined if non existant
  get(
    req: HttpRequest<any>
  ): { response: HttpResponse<any>; expired: boolean } | undefined {
    const url = req.urlWithParams;

    if (!url.includes("lectures") && !url.includes("cards")) {
      //only cards and lectures are cached
      return;
    }
    let cached = localStorage.getItem(url);

    if (!cached) return;
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
