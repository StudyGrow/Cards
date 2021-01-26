import { isDevMode } from '@angular/core';
import { NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { environment } from './../environments/environment';

export const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: environment.domain,
  },
  position: 'bottom-right',
  theme: 'classic',
  palette: {
    popup: {
      background: '#333333',
      text: '#ffffff',
      link: '#ffffff',
    },
    button: {
      background: '#f1d600',
      text: '#454545',
      border: 'transparent',
    },
  },
  type: 'info',
  content: {
    message: 'This website uses cookies to ensure you get the best experience on our website.',
    dismiss: 'Got it!',
    deny: 'Refuse cookies',
    link: '',
    href: '',
    policy: 'Cookie Policy',
  },
};
