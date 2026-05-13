const express = require("express");

const app = express();

app.use(express.json());

let users = [];
let posts = [];

app.post("/register", (req, res) => {

    const { username } = req.body;

    users.push(username);

    res.json({
        message: "User Registered"
    });
});

app.post("/post", (req, res) => {

    const { username, content } = req.body;

    posts.push({
        username,
        content,
        likes: 0,
        comments: []
    });

    res.json({
        message: "Post Added"
    });
});

app.get("/posts", (req, res) => {

    res.json(posts);
});

app.post("/like", (req, res) => {

    const { index } = req.body;

    posts[index].likes++;

    res.json({
        message: "Post Liked"
    });
});

app.post("/comment", (req, res) => {

    const { index, comment } = req.body;

    posts[index].comments.push(comment);

    res.json({
        message: "Comment Added"
    });
});

app.listen(3000, () => {

    console.log("Server running at http://localhost:3000");
});