import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { googleCallback } from 'src/app/store/actions/UserActions';

@Component({
  selector: 'app-google-callback',
  templateUrl: './google-callback.component.html',
  styleUrls: ['./google-callback.component.scss'],
})
export class GoogleCallbackComponent implements OnInit {
  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    const href = this.router.url;
    this.store.dispatch(googleCallback({ callbackUrl: href }));
  }
}
