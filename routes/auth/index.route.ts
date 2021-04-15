import { route, POST, before, inject } from 'awilix-express';
import passport from "passport";
import userService from "../../services/user.service";

@route('/auth')
export default class UserRoute {
    constructor({ userService }) {
        this.userService = userService;
      }
      userService: userService;
    
  @route('/login')
  @POST()
//   @before(
//     inject(({ validationFactory }) => validationFactory.signup()),
//   )
  async signinEmail(req: any, res: any, next) {
    this.userService.login(passport, req, res, next);
  }
}