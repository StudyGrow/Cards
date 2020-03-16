//This service is made to manage states across components

import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StatesService {
  addComponentHidden: Subject<boolean> = new Subject();
  formMode: Subject<string> = new Subject();

  constructor() {}

  getFormMode(): Subject<string> {
    return this.formMode;
  }
  setFormMode(mode: string): void {
    this.formMode.next(mode);
  }
  getAddComponentHidden(): Subject<boolean> {
    return this.addComponentHidden;
  }

  setAddComponentHidden(value: boolean): void {
    this.addComponentHidden.next(value);
  }
}
