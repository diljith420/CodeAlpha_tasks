const express = require("express");

const app = express();

app.use(express.json());

let projects = [];

app.post("/project", (req, res) => {

    const { name } = req.body;

    projects.push({
        name: name,
        tasks: []
    });

    res.json({
        message: "Project Created"
    });
});

app.post("/task", (req, res) => {

    const { projectIndex, task } = req.body;

    projects[projectIndex].tasks.push({
        name: task,
        comments: []
    });

    res.json({
        message: "Task Added"
    });
});

app.post("/comment", (req, res) => {

    const { projectIndex, taskIndex, comment } = req.body;

    projects[projectIndex]
        .tasks[taskIndex]
        .comments.push(comment);

    res.json({
        message: "Comment Added"
    });
});

app.get("/projects", (req, res) => {

    res.json(projects);
});

app.listen(3000, () => {

    console.log("Server running at http://localhost:3000");
});