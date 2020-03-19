const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));

app.get("/creator", (req, res) => {
  res.render("creator", { queries: req.query });
});

app.get("*", (req, res) => {
  res.render("index", { queries: req.query });
});

app.listen(port, () =>
  console.log(`T-shirt creator listening on port ${port}!`)
);
