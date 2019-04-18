const { db } = require('./db');

const getAllShows = () => {
    return db.any(`
    SELECT *
    FROM shows;`);
};

const byGenre = (genre) => {
    return db.any(`
    SELECT * FROM shows
    JOIN genres
    ON shows.genre_id = genres.id
    WHERE shows.genre_id = $[genre];`, {
            genre,
        });
};

const byUser = (user_id) => {
    return db.any(`
    SELECT * FROM shows
    JOIN users
    ON shows.user_id = users.id
    WHERE shows.user_id = $[user_id];`, {
            user_id,
        });
};

const byShowTitle = (title) => {
    return db.any(`
    SELECT *
    FROM shows
    WHERE shows.title = $[title]
    `, { title });
};

const byShowId = (id) => {
    return db.oneOrNone(`
    SELECT *
    FROM shows
    WHERE shows.id = $[id]
    `, { id });
};

const createShow = (title, img_url, user_id, genre_id) => {
    return db.one(`
    INSERT INTO shows (title, img_url, user_id, genre_id)
    VALUES ($[title], $[img_url], $[user_id], $[genre_id])
    RETURNING id;
    `, { title, img_url, user_id, genre_id });
};

module.exports = {
    createShow,
    byGenre,
    byShowId,
    byShowTitle,
    byUser,
    getAllShows,
};