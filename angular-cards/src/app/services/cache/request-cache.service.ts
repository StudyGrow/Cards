import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

const maxAge = 180000; //3min
@Injectable({
  providedIn: 'root',
})
export class RequestCache {
  //puts new request into the cache
  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    let url = req.urlWithParams;
    if (this.shouldBeCached(url)) {
      //only cache cards and lectures requests
      const entry = { response, fetched: Date.now() };
      try {
        localStorage.setItem(url, JSON.stringify(entry));
      } catch (error) {
        console.log(error);
      }
    }
  }

  //returns cached objects or undefined if non existant
  get(req: HttpRequest<any>): { response: HttpResponse<any>; expired: boolean } {
    const url = req.urlWithParams;

    if (!this.shouldBeCached(url)) {
      return undefined;
    }
    let cached = localStorage.getItem(url); //get item as string from localstorage

    if (!cached) return undefined; //no item found
    let cacheObject = JSON.parse(cached); //parse the string into json

    let isExpired = cacheObject.fetched < Date.now() - maxAge;

    return { response: cacheObject.response, expired: isExpired };
  }

  shouldBeCached(url: string): boolean {
    if (url.includes('lecture') || url.includes('cards')) {
      //only cards and lectures are cached
      return true;
    } else {
      return false;
    }
  }

  remove(url: string) {
    localStorage.removeItem(url);
  }
  clear() {
    localStorage.clear();
  }
}
