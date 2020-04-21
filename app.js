const express = require("express");
const app = express();
const morgan = require("morgan");

// bring in routes
const postRoutes = require("./routes/post");

// middleware

app.get("/", postRoutes.getPosts);

app.listen(4000);
