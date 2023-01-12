import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

const maxAge = 180000; //3min
@Injectable({
  providedIn: 'root',
})
export class RequestCache {
  //puts new request into the cache
  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    if (url.includes('cards') || url.includes('lecture')) {
      //only cache cards and lectures requests
      const entry = { response, fetched: Date.now() };
      try {
        localStorage.setItem(url, JSON.stringify(entry));
      } catch (error) {
        console.error(error);
      }
    }
  }

  //returns cached lectures or cards or undefined if non existant
  get(req: HttpRequest<any>): { response: HttpResponse<any>; expired: boolean } | undefined {
    const url = req.urlWithParams;

    if (!url.includes('lecture') && !url.includes('cards')) {
      //only cards and lectures are cached
      return;
    }
    let cached = localStorage.getItem(url); //get item as string from localstorage

    if (!cached) return; //no item found
    let cacheObject = JSON.parse(cached); //parse the string into json

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
