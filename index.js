const mongoose = require("mongoose");
const express = require("express");
const app = express();
const connectDatabase = require("./Database/index")
const movieQuery = require("./Controllers/movie")

app.get("/movies", movieQuery)

connectDatabase().then(() => {
    app.listen(3001, () => {
        console.log("Database Connected At PORT: 3001");
    })
}).catch((err) => {
    console.log("Error is", err);
})