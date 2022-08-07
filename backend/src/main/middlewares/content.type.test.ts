import app from "../config/app";

import request from "supertest";

describe("Content Type Middleware", () => {
  test("Should return default content type as json", async () => {
    app.get("/test_content_type", (req, res) => {
      res.send("");
    });
  });
});
