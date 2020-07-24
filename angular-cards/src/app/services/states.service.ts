//This service is made to manage states across components

import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StatesService {
  private loadingCount = 0;
  private loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private hideSgtn$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private typing$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private drawertoggler$ = new BehaviorSubject(false);
  constructor() {}

  getLoadingState(): Observable<boolean> {
    return this.loading$.asObservable();
  }
  setLoadingState(value: boolean) {
    if (value) {
      this.loadingCount++;
      if (this.loadingCount == 1) {
        this.loading$.next(true);
      }
    } else {
      this.loadingCount--;
      if (this.loadingCount <= 0) {
        this.loadingCount = 0;
        this.loading$.next(false);
      }
    }
  }

  toggleDrawer() {
    let curr = this.drawertoggler$.getValue() || false;
    this.drawertoggler$.next(!curr);
  }
  closeDrawer() {
    this.drawertoggler$.next(false);
  }
  toggle(): Observable<boolean> {
    return this.drawertoggler$.asObservable();
  }
}
