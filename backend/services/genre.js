const { db } = require('./db');

const getAllGenres = () => {
    return db.any(`
    SELECT *
    FROM genres;`);
};

module.exports = {
    getAllGenres
};