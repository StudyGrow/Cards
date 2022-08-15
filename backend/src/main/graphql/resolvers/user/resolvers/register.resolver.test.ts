import request from "supertest";
import { ApolloServer, gql } from "apollo-server-express";
import { createTestClient } from "apollo-server-integration-testing";
import { hash } from "bcryptjs";
import makeApolloServer from "../../../helpers";
import app from "../../../../config/app";
import setCookie from 'set-cookie-parser';
import { MongoHelper } from "../../../../../infrastructure/db/mongodb/helpers/mongodb.helper";
import { RoleEnum, User } from "../../../../docs/models/user.model";
import { RegisterResolver } from "./register.resolver";
import RedisClientInstance from "../../../../../infrastructure/db/redis/redis.client";

let apolloServer: ApolloServer;

describe("GraphQL Register", () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL!);
    apolloServer = await makeApolloServer(RegisterResolver);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    await (await MongoHelper.getCollection(User)).deleteMany({});
  });

  afterEach(async () => {
    const redis = RedisClientInstance.getInstance();
    await redis.del("");
    await redis.del("some@mmmail.com resetAccountPassword");
    await redis.del("random.mail@gmmmail.com resetAccountPassword");
  })

  describe("Register Mutation", () => {
    const registerMutation = gql`
      mutation register(
        $email: String!
        $password: String!
      ) {
        register(
          data: {password: $password, email: $email }
        ) {
          email
        }
      }
    `;
    test("On valid register data should return an Account", async () => {
      const { mutate } = createTestClient({ apolloServer });
      const res: any = await mutate(registerMutation, {
        variables: {
          email: "random.mail@gmmmail.com",
          password: "123",
        },
      });
      expect(res.data.register.email).toBe("random.mail@gmmmail.com");
    });

    test("On invalid data should return EmailInUseError", async () => {
      let accountCollection = await MongoHelper.getCollection(User);
      const password = await hash("123", 12);
      await accountCollection.create({
        email: "random.mail@gmmmail.com",
        password: password,
        role: RoleEnum.user
      });
      const { mutate } = createTestClient({ apolloServer });
      const res: any = await mutate(registerMutation, {
        variables: {
          email: "random.mail@gmmmail.com",
          password: "123",
        },
      });
      expect(res.data).toBeFalsy();
      expect(res.errors[0].message).toBe(
        "EmailInUseError: The received email is already in use"
      );
    });

    test("Should register by email with password and check if set cookie headers are sent back", async () => {
      const registerMutationString = `mutation( $password: String!, $email: String!){
        register(data:{ password: $password, email: $email}){
          email
        }
      }`;
      const resultUser = await request(app)
        .post("/graphql")
        .send({
          query: registerMutationString,
          variables: {
            email: "random.mail@gmmmail.com",
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

  // describe("Request Account Password Reset Mutation", () => {
  //   const requestAccountPasswordResetMutation = gql`
  //   mutation requestAccountPasswordReset(
  //     $email: String!
  //   ) {
  //     requestAccountPasswordReset(
  //       data: { email: $email }
  //     )
  //   }
  // `;
  //   // test("Should return bad request error, when input format is faulty", async () => {
  //   //   const { mutate } = createTestClient({ apolloServer });
  //   //   const res: any = await mutate(requestAccountPasswordResetMutation, {
  //   //     variables: {
  //   //       email: "notAMail",
  //   //     },
  //   //   });
  //   //   expect(res.data).toBeFalsy();
  //   //   expect(res.errors[0].message).toBe("Argument Validation Error")
  //   // })
  //   // test("Should return bad request error, when mail is missing from input", async () => {
  //   //   const { mutate } = createTestClient({ apolloServer });
  //   //   const res: any = await mutate(requestAccountPasswordResetMutation, {
  //   //     variables: {
  //   //       email: "some@mmmail.com",
  //   //     },
  //   //   });
  //   //   expect(res.data.requestAccountPasswordReset).toBeTruthy();
  //   // })
  //   // test("Should return bad request error, when mail is missing from input", async () => {
  //   //   const { mutate } = createTestClient({ apolloServer });
  //   //   let accountCollection = await MongoHelper.getCollection(User);
  //   //   await accountCollection.create({
  //   //     email: "some@mmmail.com",
  //   //     password: "password",
  //   //     role: RoleEnum.user
  //   //   });
  //   //   const res: any = await mutate(requestAccountPasswordResetMutation, {
  //   //     variables: {
  //   //       email: "some@mmmail.com",
  //   //     },
  //   //   });
  //   //   expect(res.data.requestAccountPasswordReset).toBe(true);
  //   //   const user = await accountCollection.findOne({ email: "some@mmmail.com" })
  //   //   expect(user?.resetPasswordData?.code).toBeDefined();
  //   //   expect((user?.resetPasswordData?.expiration as Date).getTime()).toBeGreaterThan(Date.now());
  //   // })
  //   test("Should create a new token for every request", async () => {
  //     jest.setTimeout(10000)
  //     const { mutate } = createTestClient({ apolloServer });
  //     let accountCollection = await MongoHelper.getCollection(User);
  //     await accountCollection.create({
  //       email: "some@mmmail.com",
  //       password: "password",
  //       role: RoleEnum.user
  //     });
  //     await mutate(requestAccountPasswordResetMutation, {
  //       variables: {
  //         email: "some@mmmail.com",
  //       },
  //     });

  //     let user = await accountCollection.findOne({ email: "some@mmmail.com" })
  //     const code = user?.resetPasswordData?.code

  //     await mutate(requestAccountPasswordResetMutation, {
  //       variables: {
  //         email: "some@mmmail.com",
  //       },
  //     });

  //     user = await accountCollection.findOne({ email: "some@mmmail.com" })
  //     const newCode = user?.resetPasswordData?.code

  //     expect(code).not.toBe(newCode);
  //   })
  // })
  // describe("Reset Mail Mutation", () => {
  //   const resetAccountPasswordMutation = gql`
  //   mutation resetAccountPassword(
  //     $email: String!
  //     $code: String!
  //     $password: String!
  //   ) {
  //     resetAccountPassword(
  //       data: { email: $email, code: $code, password: $password }
  //     )
  //   }
  // `;
  //   const requestAccountPasswordResetMutation = gql`
  //     mutation requestAccountPasswordReset(
  //       $email: String!
  //     ) {
  //       requestAccountPasswordReset(
  //         data: { email: $email }
  //       )
  //     }
  //   `;
  //   test("Should fail if registration data input has faulty mail", async () => {
  //     const { mutate } = createTestClient({ apolloServer });

  //     const res: any = await mutate(resetAccountPasswordMutation, {
  //       variables: {
  //         email: "notamail",
  //         code: "11111",
  //         password: "aaaaaa",
  //       },
  //     });

  //     expect(res.data).toBeFalsy();

  //     expect(res.errors[0].message).toBe("Argument Validation Error");
  //   })
  //   test("Should fail if registration data input is faulty", async () => {
  //     const { mutate } = createTestClient({ apolloServer });

  //     const res: any = await mutate(resetAccountPasswordMutation, {
  //       variables: {
  //         email: "amail@mail.mailmailmail",
  //         code: "11111",
  //         password: "🐒",
  //       },
  //     });

  //     expect(res.data).toBeFalsy();

  //     expect(res.errors[0].message).toBe("Error: Validation failed");
  //   })

  //   test("Should fail if no user is found by that mail", async () => {
  //     const { mutate } = createTestClient({ apolloServer });

  //     const res: any = await mutate(resetAccountPasswordMutation, {
  //       variables: {
  //         email: "some@mail.com",
  //         code: "111111",
  //         password: "i_am_such_a_good_password",
  //       },
  //     });


  //     expect(res.data).toBeFalsy();
  //     expect(res.errors[0].message).toBe("NotFoundError: No user found by mail some@mail.com");
  //   })

  //   test("Should fail if code is wrong", async () => {
  //     const { mutate } = createTestClient({ apolloServer });

  //     let accountCollection = await MongoHelper.getCollection(User);
  //     await accountCollection.create({
  //       email: "some@mail.com",
  //       password: "password",
  //       role: RoleEnum.user
  //     });

  //     const res: any = await mutate(resetAccountPasswordMutation, {
  //       variables: {
  //         email: "some@mail.com",
  //         code: "111111",
  //         password: "i_am_such_a_good_password",
  //       },
  //     });

  //     expect(res.data).toBeFalsy();
  //     expect(res.errors[0].message).toBe("NotFoundError: No reset token available for this user");
  //   })

  //   test("Should fail if code is expired and remove it", async () => {
  //     const { mutate } = createTestClient({ apolloServer });

  //     let accountCollection = await MongoHelper.getCollection(User);
  //     await accountCollection.create({
  //       email: "some@mail.com",
  //       password: "password",
  //       role: RoleEnum.user,
  //       resetPasswordData: {
  //         code: "i_am_a_code",
  //         expiration: new Date(Date.now() - 450867)
  //       }
  //     });

  //     const res: any = await mutate(resetAccountPasswordMutation, {
  //       variables: {
  //         email: "some@mail.com",
  //         code: "I_AM_A_DIFFERENT_CODE",
  //         password: "i_am_such_a_good_password",
  //       },
  //     });

  //     expect(res.data).toBeFalsy();
  //     expect(res.errors[0].message).toBe("UnauthorizedError: Reset Token expired");

  //     const user = await accountCollection.findOne({ email: "some@mail.com" })

  //     expect(user?.resetPasswordData?.code).toBeFalsy();
  //     expect(user?.resetPasswordData?.expiration).toBeFalsy();

  //   })

  //   test("Should succeed if code is right and remove code from user document", async () => {
  //     const { mutate } = createTestClient({ apolloServer });

  //     let accountCollection = await MongoHelper.getCollection(User);
  //     await accountCollection.create({
  //       email: "some@mail.com",
  //       password: "password",
  //       role: RoleEnum.user
  //     });

  //     //create reset code
  //     await mutate(requestAccountPasswordResetMutation, {
  //       variables: {
  //         email: "some@mail.com",
  //       },
  //     })

  //     let user = await accountCollection.findOne({ email: "some@mail.com" })
  //     let code = user?.resetPasswordData?.code;

  //     const res: any = await mutate(resetAccountPasswordMutation, {
  //       variables: {
  //         email: "some@mail.com",
  //         code: code,
  //         password: "i_am_such_a_good_password",
  //       },
  //     });

  //     user = await accountCollection.findOne({ email: "some@mail.com" })
  //     code = user?.resetPasswordData?.code;
  //     const timestamp = user?.resetPasswordData?.expiration;

  //     expect(code).toBeFalsy()
  //     expect(timestamp).toBeFalsy()

  //     expect(res.data).toBeTruthy();
  //     expect(res.data?.resetAccountPassword).toBe(true);
  //   })

  //   test("Should fail, because after 6 requests the throttler kicks in", async () => {
  //     apolloServer = await makeApolloServer();

  //     const { mutate } = createTestClient({ apolloServer });

  //     let accountCollection = await MongoHelper.getCollection(User);
  //     await accountCollection.create({
  //       email: "some@mail.com",
  //       password: "password",
  //       role: RoleEnum.user
  //     });

  //     const makeMutation = async () => {
  //       return await mutate(resetAccountPasswordMutation, {
  //         variables: {
  //           email: "some@mail.com",
  //           code: "i_am_a_code",
  //           password: "i_am_such_a_good_password",
  //         },
  //       });
  //     }

  //     // make 10 requests
  //     await makeMutation();
  //     await makeMutation();
  //     await makeMutation();
  //     await makeMutation();
  //     await makeMutation();
  //     await makeMutation();
  //     await makeMutation();
  //     await makeMutation();
  //     await makeMutation();
  //     await makeMutation();
  //     const res: any = await makeMutation();
  //     expect(res?.errors[0].message).toBe("too many requests");

  //     const user = await accountCollection.findOne({ email: "some@mail.com" })

  //     expect(user?.resetPasswordData?.code).toBeFalsy();
  //     expect(user?.resetPasswordData?.expiration).toBeFalsy();
  //   })
  // })
});
