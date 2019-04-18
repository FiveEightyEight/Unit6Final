const { db } = require('./db');

const getAllUsers = () => {
    return db.any(`
    SELECT *
    FROM users;`);
};

const getUser = (id) => {
    return db.oneOrNone(`
    SELECT *
    FROM users
    WHERE users.id = $[id];
    `, { id });
};

const createUser = (username) => {
    return db.one(`
    INSERT INTO users (username)
    VALUES ($[username])
    RETURNING id;
    `, { username })
};

module.exports = {
    createUser,
    getAllUsers,
    getUser,
};  