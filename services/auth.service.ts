
import UserService from "./user.service";
import bcryptjs from 'bcryptjs';
import crypto from "crypto-random-string";
import { Request } from "express";

export default class AuthService {
    constructor({ userService, tokenService }) {
      this.userService = userService;
      this.tokenService = tokenService;
    }
    userService: UserService;
    tokenService;
    
    async authorizeRequest(req: Request) {
      var header = req.headers.cookie;
      let token;
      const value = `; ${header}`;
      const parts = value.split(`; auth=`);
      token = parts.pop().split(';').shift();
    
      if (token == null) throw Error('Authorization header empty');
      console.log("tokentokentokentoken")
      console.log(token)
      return this.tokenService.verifyAuthToken(token);
    }
    async externalSignin(payload, provider) {
      console.log(`${provider} signin attempt`);
      console.log(payload)
      let email = payload.emails[0].value;
      let user;
      try {
        user = await this.userService.getUser({
          email: payload.email,
        });
      } catch (error) {
        console.log(`${provider} user was not found`);
        console.log(error.stack);
      }
  
      if (user) {
        if (email && user.email !== email) {
          user.email = email;
          try {
            user = await this.userService.updateUser(user);
          } catch (error) {
            console.log(`${provider} user could not be updated`);
            console.log(error.stack);
          }
        }
      } else {
        try {
          let username = email.split("@")[0]
          user = await this.userService.createUser({
            externalId: payload.id,
            email: email,
            username: username,
            password: crypto({length: 42})
          });
        } catch (error) {
          console.log(`${provider} user could not be created`);
          console.log(error.stack);
          throw { status: 500, message: 'Authentication failed' };
        }
      }
      try {
        let authToken = await this.tokenService.createAuthToken(
          user._id,
        );
        let refreshToken = await this.tokenService.createRefreshToken(
          user._id,
        );
        console.log(
          `${user.email} succesfuly signed in with ${provider}`,
        );
        return {
          tokens: {
            auth: authToken,
            refresh: refreshToken,
          },
          user: user,
        };
      } catch (error) {
        console.log('Token generation failed');
        console.log(error.stack);
        throw { status: 500, message: 'Authentication failed' };
      }
    }
    
    async signUpByEmail(userToSave) {
      try {
        await this.userService.checkUniqueUser(userToSave.email, userToSave.username);
        let hashedPassword = await this.hashPassword(userToSave.password);
    
        await this.userService.createUser({
          email: userToSave.email,
          password: hashedPassword,
          username: userToSave.username
        });

        return true;
      } catch (error) {
        console.log('Email signUp failed');
        console.log(error.stack);
        throw { status: 500, message: 'Authentication failed' };
      }
    }

    async signInByEmailOrUsername(emailOrUsername: string, password: string) {
      let user;
      user = await this.userService.getUserByEmail(emailOrUsername);
      if (!user) {
        user = await this.userService.getUser({username: emailOrUsername});
      }
      if (!user) {
        throw new Error('Email or Password wrong');
      }
      else if(user && !user.confirmed){
        throw { status: 403, message: 'Email not confirmed' };
      }
  
      let validation = await bcryptjs.compare(password, user.password);
      if (validation) {
        try {
          let authToken = await this.tokenService.createAuthToken(
            user._id,
          );
          let refreshToken = await this.tokenService.createRefreshToken(
            user._id,
          );
          console.log(
            `${user.email} succesfuly signed in by Email`,
          );
          return {
            tokens: {
              auth: authToken,
              refresh: refreshToken,
            },
            user: user,
          };
        } catch (error) {
          console.log('Token generation failed');
          console.log(error.stack);
          throw { status: 500, message: 'Authentication failed' };
        }
      } else {
        throw new Error('Email or Password wrong');
      }
    }
  //generates a secure hash for the password
  async hashPassword(password) {
    const salt = bcryptjs.genSaltSync(10);
    return await bcryptjs.hash(password, salt);
  }
  }
  