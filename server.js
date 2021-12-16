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

// API route handlers.
app.get("/api", function (req, res) {
  const currentDate = new Date();
  res.json({ unix: currentDate.getTime(), utc: currentDate.toUTCString() });
});

app.get("/api/:date", function (req, res) {
  let dateParam = req.params.date;

  /* 
    If date provided is in a number format (e.g. milliseconds), instead of a 
    string, convert to number.
  */
  if (Number(dateParam)) {
    dateParam = Number(dateParam);
  }

  const date = new Date(dateParam);

  if (date.toUTCString() == "Invalid Date") {
    res.json({ error: "Invalid Date" });
  }

  const dateInMilliseconds = date.getTime();
  const dateInUTCString = date.toUTCString();
  res.json({ unix: dateInMilliseconds, utc: dateInUTCString });
});

// Port listener.
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
