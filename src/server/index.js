let path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");
async function postUrl(url) {
  const data = await axios
    .post(
      `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&url=${url}`
    )
    .then(({data}) => {
      return {
        agreement: data.agreement,
        subjectivity: data.subjectivity,
        confidence: data.confidence,
        irony: data.irony,
        score_tag: data.score_tag,
        text: data.sentence_list[0].text,
      };
    });
  return data;
}

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html", { root: __dirname + "/.." });
});
app.post("/api", async function (req, res) {
  let data = await postUrl(req.body.url);
  res.send(data);
});
app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
module.exports = app;
