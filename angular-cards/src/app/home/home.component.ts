import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { auth } from "../store/actions/UserActions";
import { map } from "rxjs/operators";
import { authenticated } from "../store/selector";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  authenticated$: Observable<boolean>;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.authenticated$ = this.store.select("data").pipe(map(authenticated));
  }
}
