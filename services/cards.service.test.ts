import { Db, MongoClient } from "mongodb";
import dotenv from "dotenv";
import { Card } from "../models/cards.model";

dotenv.config();
describe("test tessting", () => {
  let connection: MongoClient;
  let db: Db;
  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_URL_JEST, {
      useNewUrlParser: true,
    });
    db = await connection.db();
    const card = new Card({
      vorlesung: "",
    });
    console.log(card);
  });
  afterAll(async () => {
    await connection.close();
  });
  it("okokooko", () => {
    // expect().to
  });
});
