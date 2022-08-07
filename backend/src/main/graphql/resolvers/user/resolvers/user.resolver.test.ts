import request from "supertest";
import { ApolloServer } from "apollo-server-express";
import { hash } from "bcryptjs";
import makeApolloServer from "../../../helpers";
import app from "../../../../config/app";
import setCookie from 'set-cookie-parser';
import { MongoHelper } from "../../../../../infrastructure/db/mongodb/helpers/mongodb.helper";
import { RoleEnum, User } from "../../../../docs/models/user.model";

let apolloServer: ApolloServer;

describe("GraphQL Get User", () => {
  beforeAll(async () => {
    apolloServer = await makeApolloServer();
    await MongoHelper.connect(process.env.MONGO_URL!);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    await (await MongoHelper.getCollection(User)).deleteMany({});
  });

  describe("Get User Query", () => {
    const getUserQuery = `
          query {
            getUser {
              _id
              firstName
              email
              lastName
            }
          }
    `;

    test("Should login by email with password and use cookies to get current user", async () => {
      const loginMutation = `query( $password: String!, $email: String!){
          login(data:{ password: $password, email: $email}){
            email
          }
        }`;
      let accountCollection = await MongoHelper.getCollection(User);
      const password = await hash("123", 12);
      await accountCollection.create({
        email: "random.mail@gmail.com",
        password: password,
        role: RoleEnum.user
      });
      const resultUser = await request(app)
        .post("/graphql")
        .send({
          query: loginMutation,
          variables: {
            email: "random.mail@gmail.com",
            password: "123",
          },
        })
        .withCredentials();
      var cookies = setCookie.parse(resultUser.get("Set-Cookie"), {
        decodeValues: true  // default: true
      });
      expect(cookies.some(c => c.name === 'authToken')).toBeTruthy();
      const resultCurrentUser = await request(app)
        .post("/graphql")
        .send({
          query: getUserQuery,
        })
        .withCredentials().set('Cookie', "authToken=" + cookies.find(c => c.name === 'authToken')?.value + "; refreshToken=" + cookies.find(c => c.name === 'refreshToken')?.value);
      expect(resultCurrentUser.body.data.getUser.email).toBe("random.mail@gmail.com");
      expect(resultCurrentUser.body.data.getUser.password).toBeFalsy();
      expect(resultCurrentUser.body.data.getUser._id).toBeTruthy();
    });

    //TODO: COOKIETESTS
  });
});
