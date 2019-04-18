const ShowServices = require('../services/shows');
const ShowRouter = require('express').Router();

ShowRouter.get('/all', (req, res) => {
    ShowServices.getAllShows()
        .then(data => {
            res.status(200)
                .json(data);
        })
        .catch(err => {
            res.status(400)
                .json({
                    message: 'error fetching all shows',
                });
        });
});

ShowRouter.get('/all/:user_id', (req, res, next) => {
    const { user_id } = req.params;
    if (!id.match(/[0-9]/g)) next();
    ShowServices.byUser(user_id)
        .then(data => {
            res.status(200)
                .json(data);
        })
        .catch(err => {
            res.status(400)
                .json({
                    message: 'error fetching all show data by user id',
                });
        });
});

ShowRouter.get('/all/:genre', (req, res) => {
    const { genre } = req.params;
    ShowServices.byGenre(genre)
        .then(data => {
            res.status(200)
                .json(data);
        })
        .catch(err => {
            res.status(400)
                .json({
                    message: 'error fetching all show data by genre',
                });
        });
});

ShowRouter.get('/:id', (req, res, next) => {
    const { id } = req.params;
    if (!id.match(/[0-9]/g)) next();
    ShowServices.byShowId(id)
        .then(data => {
            res.status(200)
                .json(data);
        })
        .catch(err => {
            res.status(400)
                .json({
                    message: 'error fetching show data by id',
                });
        });
});

ShowRouter.get('/:title', (req, res) => {
    const { title } = req.params;
    ShowServices.byShowTitle(title)
        .then(data => {
            res.status(200)
                .json(data);
        })
        .catch(err => {
            res.status(400)
                .json({
                    message: 'error fetching show data by title',
                });
        });
});

ShowRouter.post('/', (req, res) => {
    const { title, img_url, user_id, genre_id } = req.body;
    ShowServices.createShow(title, img_url, user_id, genre_id)
        .then(data => {
            res.status(200)
                .json(data);
        })
        .catch(err => {
            res.status(400)
                .json({
                    message: 'error creating show',
                });
        });
})

module.exports = ShowRouter;