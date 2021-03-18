// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import "babel-polyfill";
// import { handleSubmit } from "../handleSubmit";
import postToApi from "../postToApi";
jest.mock("../postToApi");

describe("Client Test", () => {
  test("check if handleSubmit displays fetched data", () => {
    postToApi("https://overreacted.io/goodbye-clean-code/").then(
      ({ agreement, subjectivity, confidence, irony, score_tag, text }) => {
        expect(document.getElementById("agreement").innerHTML).toEqual(
          agreement
        );
        expect(document.getElementById("subjectivity").innerHTML).toEqual(
          subjectivity
        );
        expect(document.getElementById("confidence").innerHTML).toEqual(
          confidence
        );
        expect(document.getElementById("irony").innerHTML).toEqual(irony);
        expect(document.getElementById("score_tag").innerHTML).toEqual(
          score_tag
        );
        expect(document.getElementById("text").innerHTML).toEqual(text);
      }
    );
  });
});
