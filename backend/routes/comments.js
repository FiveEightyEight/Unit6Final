const CommentServices = require('../services/comments');
const CommentRouter = require('express').Router();

CommentRouter.get('/all/:show_id', (req, res) => {
    const { show_id } = req.params;
    CommentServices.getAllShowComments(show_id)
        .then(data => {
            res.status(200)
                .json(data);
        })
        .catch(err => {
            res.status(400)
                .json({
                    message: 'error fetching all shows comments',
                });
        });
});

CommentRouter.post('/', (req, res) => {
    const { comment_body, user_id, show_id } = req.body;
    CommentServices.createComment(comment_body, user_id, show_id)
    .then( data => {
        res.status(200)
                .json(data);
    })
    .catch(err => {
        res.status(400)
            .json({
                message: 'error creating comment',
            });
    });
});

module.exports = CommentRouter;