const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", function(req, res) {
  res.render("index", {
    query: req.query
  });
});

app.listen(3000, function() {
  console.log(`Form app listening on port 3000!`);
});
