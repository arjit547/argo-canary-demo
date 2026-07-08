const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
    <html>
    <head>
        <title>EKS Demo</title>
        <style>
            body{
                font-family:Arial;
                background:#0f172a;
                color:white;
                text-align:center;
                padding-top:80px;
            }
            h1{
                color:#38bdf8;
            }
        </style>
    </head>

    <body>

    <h1>🚀 Welcome to Amazon EKS</h1>

    <h2>Version 1.0</h2>

    <p>Running successfully on Kubernetes</p>

    </body>

    </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});