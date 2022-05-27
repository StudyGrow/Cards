import { Component, OnDestroy, OnInit } from '@angular/core';
import { MailService } from '../../services/mail.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit, OnDestroy {
  constructor(private mailService: MailService) {}
  subs$: Subscription[] = [];
  tokenCheckStatus: any = 2;
  tokenCheckStatusSub: Subscription;

  ngOnInit(): void {
    let sub = this.mailService.getTokenCheckStatusUpdateListener().subscribe((tokenStatus) => {
      this.tokenCheckStatus = tokenStatus;
    });
    setTimeout(() => this.mailService.confirmAccount(), 3000);
    this.subs$.push(sub);
  }
  ngOnDestroy(): void {
    this.subs$.forEach((sub) => sub.unsubscribe());
  }
}
