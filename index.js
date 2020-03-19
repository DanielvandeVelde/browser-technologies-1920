const express = require("express");
const port = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));

app.get("/", (req, res) => {
  let queries = {
    fname: "",
    lname: ""
  };

  if (Object.entries(req.query).length > 0) {
    queries = req.query;
  }

  res.render("index", { queries });
});

app.get("/creator", (req, res) => {
  app.send("creator");
});

app.listen(port, () =>
  console.log(`T-shirt creator listening on port ${port}!`)
);
