import UserService from "./user.service";
import bcryptjs from "bcryptjs";
import crypto from "crypto-random-string";
import { Request } from "express";
import MailService from "./mail.service";
import TokenService from "./token.service";

export default class AuthService {
  constructor({ userService, tokenService, mailService, logger }) {
    this.userService = userService;
    this.tokenService = tokenService;
    this.mailService = mailService;
    this.logger = logger;
  }
  userService: UserService;
  tokenService: TokenService;
  mailService: MailService;
  logger;
  async authorizeRequest(req: Request) {
    const header = req.headers.cookie;
    let token;
    const value = `; ${header}`;
    const parts = value.split(`; auth=`);
    token = parts.pop().split(";").shift();
    try {
      if (!token) throw Error("Cookies not valid");
      let _id = await this.tokenService.verifyAuthToken(token);
      return { _id: _id };
    } catch (e) {
      let refreshToken;
      const refreshValue = `; ${header}`;
      const refreshParts = refreshValue.split(`; refresh=`);
      refreshToken = refreshParts.pop().split(";").shift();
      let _id;
      try {
        _id = await this.tokenService.verifyRefreshToken(refreshToken);
        let newAuthToken = await this.tokenService.createAuthToken(_id);
        let newRefreshToken = await this.tokenService.createRefreshToken(_id);
        return {
          _id: _id,
          newAuthToken: newAuthToken,
          newRefreshToken: newRefreshToken,
        };
      } catch (e) {
        throw Error("Cookies not valid");
      }
    }
  }
  async externalSignin(payload, provider) {
    this.logger.info(`${provider} signin attempt`);
    let email = payload.emails[0].value;
    let user;
    try {
      user = await this.userService.getUser({
        email: email,
      });
    } catch (error) {
      this.logger.info(`${provider} user was not found`);
      this.logger.debug(error.stack);
    }
    if (user) {
      if (email && user.email !== email) {
        user.email = email;
        try {
          user = await this.userService.updateUser(user);
        } catch (error) {
          this.logger.info(`${provider} user could not be updated`);
          this.logger.debug(error.stack);
        }
      }
    } else {
      try {
        let username = email.split("@")[0];
        user = await this.userService.createUser({
          externalId: payload.id,
          email: email,
          username: username,
          password: crypto({ length: 42 }),
        });
      } catch (error) {
        this.logger.info(`${provider} user could not be created`);
        this.logger.debug(error.stack);
        throw { status: 500, message: "Authentication failed" };
      }
    }
    try {
      let authToken = await this.tokenService.createAuthToken(user._id);
      let refreshToken = await this.tokenService.createRefreshToken(user._id);
      this.logger.info(`${user.email} succesfuly signed in with ${provider}`);
      return {
        tokens: {
          auth: authToken,
          refresh: refreshToken,
        },
        user: user,
      };
    } catch (error) {
      this.logger.info("Token generation failed");
      this.logger.debug(error.stack);
      throw { status: 500, message: "Authentication failed" };
    }
  }

  async signUpByEmail(userToSave) {
    try {
      await this.userService.checkUniqueUser(
        userToSave.email,
        userToSave.username
      );
      let hashedPassword = await this.hashPassword(userToSave.password);

      let user = await this.userService.createUser({
        email: userToSave.email,
        password: hashedPassword,
        username: userToSave.username,
        token: crypto({ length: 42 }),
      });
      this.mailService.sendConfirmationMail(user);
      return true;
    } catch (error) {
      this.logger.info("Email signUp failed");
      this.logger.debug(error.stack);
      throw { status: 500, message: "Authentication failed" };
    }
  }

  async signInByEmailOrUsername(emailOrUsername: string, password: string) {
    let user;
    user = await this.userService.getUserByEmail(emailOrUsername);
    if (!user) {
      user = await this.userService.getUser({ username: emailOrUsername });
    }
    if (!user) {
      throw new Error("Email or Password wrong");
    } else if (user && !user.confirmed) {
      throw { status: 403, message: "Email not confirmed" };
    }

    let validation = await bcryptjs.compare(password, user.password);
    if (validation) {
      try {
        let authToken = await this.tokenService.createAuthToken(user._id);
        let refreshToken = await this.tokenService.createRefreshToken(user._id);
        this.logger.info(`${user.email} succesfuly signed in by Email`);
        return {
          tokens: {
            auth: authToken,
            refresh: refreshToken,
          },
          user: user,
        };
      } catch (error) {
        this.logger.info("Token generation failed");
        this.logger.debug(error.stack);
        throw { status: 500, message: "Authentication failed" };
      }
    } else {
      throw new Error("Email or Password wrong");
    }
  }
  //generates a secure hash for the password
  async hashPassword(password) {
    const salt = bcryptjs.genSaltSync(10);
    return await bcryptjs.hash(password, salt);
  }
}
