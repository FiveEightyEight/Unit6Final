const UserServices = require('../services/users');
const UserRouter = require('express').Router();

UserRouter.get('/all', (req, res) => {
    UserServices.getAllUsers()
        .then(data => {
            res.status(200)
                .json(data);
        })
        .catch(err => {
            res.status(400)
                .json({
                    message: 'error fetching all users',
                });
        });
});

UserRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    UserServices.getUser(id)
        .then(data => {
            res.status(200)
                .json(data);
        })
        .catch(err => {
            res.status(400)
                .json({
                    message: 'error fetching user data',
                });
        });
});

UserRouter.post('/', (req, res) => {
    const { username } = req.body;
    UserServices.createUser(username)
        .then(data => {
            res.status(200)
                .json(data);
        })
        .catch(err => {
            res.status(400)
                .json({
                    message: 'error creating user',
                });
        });
});

module.exports = UserRouter;