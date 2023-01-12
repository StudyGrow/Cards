import { TokenChecker } from "../../data/protocols/cryptography/token.checker";
import env from "../../main/config/env";
import auth from "firebase-admin";
export class JwtAdapter implements TokenChecker {
  constructor(private readonly secret: string) {}

  /**
   * checks validity of a token
   *
   * @param token
   * @returns
   */
  async checkToken(token: string): Promise<{ uid: string; email?: string }> {
    if (auth.apps.length === 0) {
      auth.initializeApp({
        credential: auth.credential.cert(
          env.authentication.firebase.applicationCredentials
        ),
      });
    }
    const decodedToken = await auth.auth().verifyIdToken(token);
    return {
      uid: decodedToken.uid,
      email: decodedToken.email,
    };
  }
}
