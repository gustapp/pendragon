import app from "./app";

import chai from "chai";
import { Server } from "http";
const expect = chai.expect;

describe("Server module", () => {

  let server: Server;

  beforeAll((done) => {
    server = app.listen(app.get("port"), done);
  });

  it("server should be listening", () => {
    expect(server.listening).to.equal(true);
  });

  afterAll((done) => {
    server.close(done);
  });
});
