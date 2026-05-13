const express = require("express");

const app = express();

app.use(express.json());

let messages = [];

app.get("/messages", (req, res) => {

    res.json(messages);
});

app.post("/message", (req, res) => {

    const { user, text } = req.body;

    messages.push({
        user,
        text
    });

    res.json({
        message: "Message Sent"
    });
});

app.listen(3000, () => {

    console.log("Server running at http://localhost:3000");
});