import { isDevMode } from '@angular/core';
import { NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { environment } from './../environments/environment';

export const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: environment.domain,
  },
  position: 'bottom-right',
  theme: 'block',
  palette: {
    popup: {
      background: '#222222',
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
    message: 'Diese Webseite verwendet cookies 🍪 für ein optimales Nutzererlebnis',
    dismiss: 'Alles klar!',
    deny: 'Refuse cookies',
    link: '',
    href: '',
    policy: 'Cookie Policy',
  },
};
