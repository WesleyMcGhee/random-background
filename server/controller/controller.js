const movies = require('../data.json');

module.exports = {
    getPicture: (req, res) => {
        res.status(200).send(movies);
    }
}