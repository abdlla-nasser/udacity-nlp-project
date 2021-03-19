const app = require("./index")
const PORT = process.env.PORT || 5000;

app.listen(8080, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});