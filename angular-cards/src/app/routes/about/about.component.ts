import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
  @ViewChild('Cookies') fragmentCookies: ElementRef;
  @ViewChild('FAQ') fragmentFAQ: ElementRef;
  @ViewChild('TOP') fragmentTOP: ElementRef;
  public loggedIn: boolean;
  private subs: Subscription[] = [];
  constructor(private user: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.pipe(delay(200)).subscribe((frag) => {
      switch (frag) {
        case 'Cookies':
          this.fragmentCookies.nativeElement.scrollIntoView();
          break;
        case 'FAQ':
          this.fragmentFAQ.nativeElement.scrollIntoView();
          break;
        case 'info':
          this.fragmentTOP.nativeElement.scrollIntoView();
          break;
      }
    });
    let sub = this.user.authentication().subscribe((val) => {
      this.loggedIn = val;
    });
    this.subs.push(sub);
  }
  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
