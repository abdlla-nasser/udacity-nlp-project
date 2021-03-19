const app = require("./index");
const PORT = process.env.PORT || 8081;

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
