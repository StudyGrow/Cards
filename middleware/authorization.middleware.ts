import AuthService from "../services/auth.service";

export default function authorize({
    authService,
    // logger,
  }: {
    authService: AuthService;
    logger: any;
  }) {
    return function (req: any, res: any, next: any) {
      authService
        .authorizeRequest(req)
        .then((_id: any) => {
          console.log('payloadpayloadpayload')
          console.log(_id)
          req._id = _id;
          next();
        })
        .catch((error: any) => {
          console.log(error);
          return res.sendStatus(401);
        });
    };
  }
  