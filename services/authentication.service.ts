export default class AuthenticationService {
    constructor({ userService }) {
      this.userService = userService;
    }
    userService;
  
    async authorizeRequest(req) {
    //   var header = req.header('Authorization');
    //   if (!header) header = req.headers.authorization;
    //   const token = header && header.split(' ')[1];
    //   if (token == null) throw Error('Authorization header empty');
    //   return this.tokenService.verifyAuthToken(token);
    }

  }
  