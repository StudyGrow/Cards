//This service is made to manage states across components

import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StatesService {
  private formMode$: BehaviorSubject<string> = new BehaviorSubject("none");
  private loading$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {}

  getFormMode(): Observable<string> {
    return this.formMode$.asObservable();
  }
  setFormMode(mode: string): void {
    this.formMode$.next(mode);
  }

  getLoadingState(): BehaviorSubject<boolean> {
    return this.loading$;
  }
  setLoadingState(value: boolean) {
    this.loading$.next(value);
  }
}
