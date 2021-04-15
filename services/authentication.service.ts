export default class AuthenticationService {
    constructor({ userService }) {
      this.userService = userService;
    }
    userService;
  
    async authorizeRequest(req,res,next) {
    //   var header = req.header('Authorization');
    //   if (!header) header = req.headers.authorization;
    //   const token = header && header.split(' ')[1];
    //   if (token == null) throw Error('Authorization header empty');
    //   return this.tokenService.verifyAuthToken(token);
      if (req.isAuthenticated()) {
          next();
        } else {
          res.status(403).send('login required'); //send message to client
        }
    }

    async admin(req, res, next) {
      //   if (req.user && req.user.status === "admin") {
      //     next();
      //   } else {
      //     res.status(400).send("Du bist kein admin"); //send message to client
      //   }
      // }
    }
  }
  