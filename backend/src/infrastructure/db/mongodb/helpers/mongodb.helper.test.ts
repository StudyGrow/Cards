import { User } from "../../../../main/docs/models/user.model";
import { MongoHelper as sut } from "./mongodb.helper";

describe("Mongo Helper", () => {
  beforeAll(async () => {
    await sut.connect(process.env.MONGO_URL!);
  });

  afterAll(async () => {
    await sut.disconnect();
  });

  test("Should reconnect if mongodb is down", async () => {
    await sut.getCollection(User);
    let mongooseConnection = sut.client.connection.readyState;
    expect(mongooseConnection).toBeTruthy();
    await sut.disconnect();
    await sut.getCollection(User);
    mongooseConnection = sut.client.connection.readyState;
    expect(mongooseConnection).toBeTruthy();
  });
});
