const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("AWS Sample Project is running successfully!");
});

app.get("/api/hello", (req, res) => {
    res.json({
        message: "Hello from the AWS Sample Project!"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "UP",
        message: "Application is healthy"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});