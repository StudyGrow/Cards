import { route, POST, GET, before, inject } from "awilix-express";
import { Request, Response } from "express";
import passport from "passport";
import AuthService from "../../services/auth.service";
import TokenService from "../../services/token.service";
import userService from "../../services/user.service";

@route("/auth")
export default class UserRoute {
  constructor({ userService, authService, tokenService }) {
    this.userService = userService;
    this.authService = authService;
    this.tokenService = tokenService;
  }
  userService: userService;
  authService: AuthService;
  tokenService: TokenService;

  /**
   * @swagger
   *
   * /auth/googleCallback:
   *   post:
   *     description: Creates a user and/or signs user in
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: code
   *         description: Google code (implicit flow)
   *         in:  body
   *         required: true
   *         type: string
   *         example: {code: <token>}
   *     responses:
   *       200:
   *         description: Returns auth tokens for further requests and the user
   *         content:
   *          application/json:
   *              schema:
   *                type: string
   *                example: {user: <user>,authToken: <token>, refreshToken: <token>}
   */
  @route("/googleCallback")
  @GET()
  @before(
    inject(({ passportFactory }) =>
      passportFactory.passportAuthenticateTokenGoogle()
    )
  )
  async signinRedirectGoogle(req, res: Response, next) {
    const provider = "Google";
    this.authService
      .externalSignin(req.user, provider)
      .then((response: any) => {
        res.cookie("auth", response.tokens.auth);
        res.cookie("refresh", response.tokens.refresh);
        return res.status(200).redirect("/");
      })
      .catch((err: any) => {
        return res
          .status(err?.status || 500)
          .send(err?.message || "Internal Server Error");
      });
  }

  /**
   * @swagger
   *
   * /auth/google:
   *   post:
   *     description: Redirects user to Google sigIn page
   *     produces:
   *       - application/json
   *     responses:
   *       302:
   */
  @route("/google")
  @GET()
  @before(
    inject(({ passportFactory }) => passportFactory.passportRedirectGoogle())
  )
  async signinImplicitGoogle(req: any, res: Response) {
    res.status(302).send();
  }

  @route("/googleToken")
  @POST()
  @before(inject(({ validationFactory }) => validationFactory.signup()))
  async signinGoogle(req: any, res: any) {
    const { token } = req.body;
    const provider = "Google";
    this.authService
      .externalSignin(token, provider)
      .then((response: any) => {
        return res.status(200).send(response);
      })
      .catch((err: any) => {
        return res
          .status(err?.status || 500)
          .send(err?.message || "Internal Server Error");
      });
  }

  @route("/signin")
  @POST()
  @before(
    inject(({ validationFactory }) => validationFactory.validateUserSignIn())
  )
  async signInEmailOrUsername(req: Request, res: any) {
    const { username, password } = req.body;
    this.authService
      .signInByEmailOrUsername(username, password)
      .then((response) => {
        res.cookie("auth", response.tokens.auth);
        res.cookie("refresh", response.tokens.refresh);
        return res.status(200).send(response.user);
      })
      .catch((err: any) => {
        return res
          .status(err?.status || 500)
          .send(err?.message || "Internal Server Error");
      });
  }

  @route("/signup")
  @POST()
  @before(
    inject(({ validationFactory }) => validationFactory.validateUserSignUp())
  )
  async registerUser(req, res) {
    this.authService
      .signUpByEmail(req.body)
      .then(() => {
        res.status(200).send();
      })
      .catch((err) => {
        res.status(422).send(err.message);
      });
  }

  /**
   * @swagger
   *
   * /auth/refresh:
   *   post:
   *     description: Gert a new auth token
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: refresh_token
   *         description: An refresh JWT token
   *         in:  body
   *         required: true
   *         type: string
   *         example: {refreshToken: <required> }
   *     responses:
   *       200:
   *         description: Returns new authToken
   *         content:
   *          application/json:
   *              schema:
   *                type: string
   *                example: {authToken: <token>}
   */
  @route("/refresh")
  @POST()
  @before(inject(({ validationFactory }) => validationFactory.refresh()))
  async refresh(req: any, res: any) {
    const { refreshToken } = req.body;

    this.tokenService.verifyRefreshToken(refreshToken).then(
      async (payload: any) => {
        let token = await this.tokenService.createAuthToken(payload);
        res.cookie("auth", token);
        res.send({ authToken: token });
      },
      (error: any) => {
        return res.sendStatus(403);
      }
    );
  }

  @route("")
  @GET()
  @before(inject(({ authenticationMiddleware }) => authenticationMiddleware))
  async checkIfUserAuthenticated(req, res) {
    if (req._id) {
      res.status(200).send(true);
    } else {
      res.status(200).send(false);
    }
  }

  @route("/logout")
  @GET()
  async logoutUser(req, res: Response) {
    res.cookie("auth", "");
    res.cookie("refresh", "");
    res.send(true);
  }
}
