import AuthService from "../services/auth.service";

export default function autenticate({
  authService,
  logger,
}: {
  authService: AuthService;
  logger: any;
}) {
  return function (req: any, res: any, next: any) {
    authService
      .authorizeRequest(req)
      .then((_id: any) => {
        req._id = _id;
        next();
      })
      .catch((error: any) => {
        logger.error(error);
        next();
      });
  };
}
