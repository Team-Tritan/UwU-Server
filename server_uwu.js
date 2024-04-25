const express = require("express");
const uwuify = require("./uwu");

const app = express();

app.get("/", (_, res) => {
  res.json({
    error: false,
    message: {
      uwu: "To hit the API, make a GET request to /uwu?message=your_message_here",
    },
  });
});

app.get("/uwu", (req, res) => {
  const message = req.query.message;

  if (!message) {
    return res.json({
      error: true,
      message: "Please provide a message to uwuify",
    });
  }

  res.json({
    error: false,
    message: uwuify(message),
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
