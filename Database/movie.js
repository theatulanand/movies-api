const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    Title: String,
    Year: String,
    imdbId: String,
    Type: String,
    Poster: String
})

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;