//This service is made to manage states across components

import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StatesService {
  private formMode$: BehaviorSubject<string> = new BehaviorSubject("none");
  private lastFormMode: string;
  private loading$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private hideSgtn$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private typing$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private drawertoggler$ = new BehaviorSubject(false);
  constructor() {}

  getFormMode(): Observable<string> {
    return this.formMode$.asObservable();
  }
  setFormMode(mode: string): void {
    if (mode == "reset") {
      if (!this.lastFormMode) {
        //last form mode is undefined
        this.lastFormMode = "none";
      } // last Form mode defined
      this.formMode$.next(this.lastFormMode);
    } else {
      this.formMode$.next(mode);
      if (mode != "edit") this.lastFormMode = mode;
    }
  }
  setTyping(val: boolean) {
    this.typing$.next(val);
  }
  getTyping(): Observable<boolean> {
    return this.typing$.asObservable();
  }
  getLoadingState(): Observable<boolean> {
    return this.loading$.asObservable();
  }
  setLoadingState(value: boolean) {
    this.loading$.next(value);
  }
  setHideSuggestions(value: boolean) {
    this.hideSgtn$.next(value);
  }
  getHideSuggestions(): Observable<boolean> {
    return this.hideSgtn$.asObservable();
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
