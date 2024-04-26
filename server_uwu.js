const express = require("express");
const { uwuify, getRandomFemboyImage } = require("./uwu");

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

  const isFromDiscord = req.headers["user-agent"].includes("Discordbot");

  if (isFromDiscord) {
    const uwuifiedMessage = uwuify(message);
    const imageUrl = getRandomFemboyImage();

    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="theme-color" content="#e4aefc">
        <meta property="og:title" content="UwU">
        <meta property="og:description" content="${uwuifiedMessage}">
        <meta property="og:image" content="${imageUrl}">
      </head>
      <body>
      </body>
      </html>
    `);
  }

  res.json({
    error: false,
    message: uwuify(message),
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
