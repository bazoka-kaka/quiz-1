/**
 * Yehezkiel Wiradhika
 * 5025201086
 * Quiz1 (Webpro D)
 */

const express = require("express");

const app = express();

app.use(express.static("public"));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.redirect("/quiz1");
});

app.get("/quiz1", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/quiz1/hometown", (req, res) => {
  res.sendFile(__dirname + "/views/hometown.html");
});

app.get("/quiz1/food", (req, res) => {
  res.sendFile(__dirname + "/views/food.html");
});

app.get("/quiz1/profile", (req, res) => {
  res.sendFile(__dirname + "/views/profile.html");
});

app.get("/quiz1/tourist", (req, res) => {
  res.sendFile(__dirname + "/views/tourist.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/views/404.html");
});

app.listen(port, function () {
  console.log("Listening on port " + port);
});
