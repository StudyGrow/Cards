import request from "supertest";
import { ApolloServer, gql } from "apollo-server-express";
import { hash } from "bcryptjs";
import { createTestClient } from "apollo-server-integration-testing";
import app from "../../../../config/app";
import makeApolloServer from "../../../helpers";
import setCookie from 'set-cookie-parser';
import { MongoHelper } from "../../../../../infrastructure/db/mongodb/helpers/mongodb.helper";
import { RoleEnum, User } from "../../../../docs/models/user.model";

let apolloServer: ApolloServer;

describe("GraphQL Login", () => {
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

  describe("Login Query", () => {
    const loginQuery = gql`
      query login($email: String!, $password: String!) {
        login(
          data: { password: $password, email: $email }
        ) {
          email
        }
      }
    `;
    test("On valid credentials should return an Account", async () => {
      let accountCollection = await MongoHelper.getCollection(User);
      const password = await hash("123", 12);
      await accountCollection.create({
        email: "random.mail@gmail.com",
        password: password,
        role: RoleEnum.user
      });
      const { query } = createTestClient({ apolloServer });
      const res: any = await query(loginQuery, {
        variables: {
          email: "random.mail@gmail.com",
          password: "123",
        },
      });
      expect(res.data.login.email).toBe("random.mail@gmail.com");
    });

    test("On invalid credentials should return UnauthorizedError", async () => {
      const { query } = createTestClient({ apolloServer });
      const res: any = await query(loginQuery, {
        variables: {
          email: "random.mail@gmail.com",
          password: "123",
        },
      });
      expect(res.data).toBeFalsy();
      expect(res.errors[0].message).toBe("UnauthorizedError: Unauthorized");
    });

    test("Should login by email with password and check if set cookie headers are sent back", async () => {
      const loginMutation = `query($password: String!, $email: String!){
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
      expect(cookies.some(c => c.name === 'refreshToken')).toBeTruthy();
    });
  });
});