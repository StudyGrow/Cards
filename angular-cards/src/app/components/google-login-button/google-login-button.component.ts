import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

const googleLogoURL = 'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg';

@Component({
  selector: 'app-google-login-button',
  templateUrl: './google-login-button.component.html',
  styleUrls: ['./google-login-button.component.scss'],
})
export class GoogleLoginButtonComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.matIconRegistry.addSvgIcon('logo', this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));
  }
  ngOnInit(): void {}
  onGoogleSignIn() {
    if (environment.production) {
      window.location.href = 'https://www.' + environment.domain + '/api/auth/google';
    } else {
      window.location.href = 'http://' + environment.domain + ':' + environment.port + '/api/auth/google';
    }
  }
}
