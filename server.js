const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// Middleware.
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("public"));

// Static file routing.
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// API.
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// Listener.
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
