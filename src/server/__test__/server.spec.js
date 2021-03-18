// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import 'babel-polyfill'
const request = require("supertest");
const app = require("../index")

describe('Server Test', () => {
    // TODO: add your test cases to test server
  test("gets the test endpoint", async (done) => {
    const res = await request(app).get("/test")
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual({
      title: "test json response",
      message: "this is a message",
      time: "now",
    });
    done()
  })
  test("testing the /api post route", async (done) => {
    const res = await request(app).post("/api")
      .send({
        url: "https://overreacted.io/goodbye-clean-code/",
      })
    // console.log(res.body)
    expect(res.status).toBe(200)
    expect(res.body.agreement).toBeTruthy()
    done()
  })
})
