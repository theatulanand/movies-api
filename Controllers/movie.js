const Movie = require('../Database/movie')

async function movieQuery(req, res) {
    const { limit, page, type, q, year } = req.query;

    //console.log(type);

    let query = {}
    if (type) {
        query.Type = type
    }

    if (year) {
        let arr = year.trim().split("-");
        console.log(arr);
        if (arr[0] == "gt") {
            query.Year = { $gt: arr[1] }
        } else if (arr[0] == "lt") {
            query.Year = { $lt: arr[1] }
        }
    }

    if (q) {
        query.Title = { $regex: q };
    }

    //console.log(query)
    const movies = await Movie.find(query).limit(limit).skip(limit * (page - 1));
    //console.log(movies.length);
    return res.json(movies);
}

module.exports = movieQuery;