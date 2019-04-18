const GenreServices = require('../services/genre');
const GenreRouter = require('express').Router();

GenreRouter.get('/all', (req, res) => {
    GenreServices.getAllGenres()
        .then(data => {
            res.status(200)
                .json(data);
        })
        .catch(err => {
            res.status(400)
                .json({
                    message: 'error fetching all genres',
                });
        });
});

module.exports = GenreRouter;