import uniqid from 'uniqid';

export default class TokenService {
  constructor({ jwt, config }) {
    this.jwt = jwt;
    this.config = config;
    // this.appleAuth = appleAuth;
    // this.googleAuth = googleAuth;
  }
  jwt;
  config;
//   appleAuth;
//   googleAuth;
  async createAuthToken(payload) {
    const token = await this.jwt.sign(
      { data: payload },
      this.config.authentication.secret,
      { expiresIn: this.config.authentication.expiration },
    );
    return token;
  }

  async createRefreshToken(payload) {
    const token = await this.jwt.sign(
      { data: payload },
      this.config.authentication.secret,
    );
    return token;
  }
  createPayload(id) {
    var payload = { _id: id };
    return payload;
  }

  async createTokens(payload) {
    const parsedPayload = this.createPayload(payload);
    const authToken = await this.createAuthToken(parsedPayload);
    const refreshToken = await this.createRefreshToken(parsedPayload);
    return { authToken: authToken, refreshToken: refreshToken };
  }
  async createUID() {
    return uniqid();
  }

  async verifyAuthToken(token) {
    return new Promise((resolve, reject) => {
      this.jwt.verify(
        token,
        this.config.authentication.secret,
        (err, payload) => (err ? reject(err) : resolve(payload.data)),
      );
    });
  }
  async verifyRefreshToken(token) {
    return new Promise((resolve, reject) => {
      this.jwt.verify(
        token,
        this.config.authentication.secret,
        (err, payload) => (err ? reject(err) : resolve(payload.data)),
      );
    });
  }

  async verifyProviderToken(token, provider) {
    switch (provider) {
      case 'Apple': {
        return this.verifyAppleToke(token);
        break;
      }
      case 'Google': {
        return this.verifyGoogleToken(token);
        break;
      }
      default: {
        return new Promise((reject) => {
          reject(new Error(`Unknwown Provider; ${provider}`));
        });
      }
    }
  }

  async verifyAppleToke(token) {
    // return this.appleAuth.accessToken(token).then((response) => {
    //   let payload = this.jwt.decode(response.id_token);
    //   return { email: payload.email, externalId: payload.sub };
    // });
  }

  async verifyGoogleToken(token) {
    // return this.googleAuth.client
    //   .verifyIdToken({
    //     idToken: token,
    //     audience: this.googleAuth.clientId,
    //   })
    //   .then((response) => {
    //     let payload = response.getPayload();
    //     return { email: payload.email, externalId: payload.sub };
    //   });
  }
}
