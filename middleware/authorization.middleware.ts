import AuthService from "../services/auth.service";
import { Response } from "express";

export default function authorize({
  authService,
  logger,
}: {
  authService: AuthService;
  logger: any;
}) {
  return function (req: any, res: Response, next: any) {
    authService
      .authorizeRequest(req)
      .then((payload: any) => {
        if (payload.newAuthToken && payload.newRefreshToken) {
          res.cookie("auth", payload.newAuthToken);
          res.cookie("refresh", payload.newRefreshToken);
          req._id = payload._id;
        } else {
          req._id = payload._id;
        }
        next();
      })
      .catch((error: any) => {
        authService;
        logger.error(error);
        next();
      });
  };
}
