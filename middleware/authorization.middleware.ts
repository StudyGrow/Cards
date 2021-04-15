export default function authorize({
    authService,
    logger,
  }: {
    authService: any;
    logger: any;
  }) {
    return function (req: any, res: any, next: any) {
      authService
        .authorizeRequest(req,res,next)
        .then((payload: any) => {
          req._id = payload._id;
          next();
        })
        .catch((error: any) => {
          logger.error(error);
          return res.sendStatus(401);
        });
    };
  }
  