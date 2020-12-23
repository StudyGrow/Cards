import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NavbarToggleService {
  opened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}

  get state() {
    return this.opened.asObservable();
  }

  toggle() {
    this.opened.next(!this.opened.getValue());
  }
  open() {
    this.opened.next(true);
  }
  close() {
    this.opened.next(false);
  }
}
