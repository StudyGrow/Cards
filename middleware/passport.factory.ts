import { Response } from 'express';
import { PassportStatic } from 'passport';
export default class PassportFactory {
  constructor({ passport }) {
    this.passport = passport;
  }
  passport: PassportStatic;
  passportRedirectGoogle() {
    let passport = this.passport;
    return function (req: any, res: Response, next: any) {
        passport.authenticate('google', {
        scope: 'https://www.googleapis.com/auth/userinfo.email',
      })(req, res, next);
    };
  }

  passportAuthenticateTokenGoogle() {
    let passport = this.passport;
    return function (req: any, res: Response, next: any) {
      passport.authenticate('google', function (err, user, info) {
        if (err) {
          err.message = 'Error using token';
          res.status(401).redirect('/api/auth/google');
          return next(err);
        } else {
          req.user = user;
          next();
        }
      })(req, res, next);
    };
  }
}
