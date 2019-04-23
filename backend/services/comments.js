const { db } = require('./db');

const getAllShowComments = (show_id) => {
    return db.any(`
    SELECT comments.id AS comment_id, comments.user_id AS comment_uid, *
    FROM comments
    JOIN shows
    ON comments.show_id = shows.id
    WHERE comments.show_id = $[show_id];`, {
            show_id
        });
};

const createComment = (comment_body, user_id, show_id) => {
    return db.one(`
    INSERT INTO comments (comment_body, user_id, show_id)
    VALUES ($[comment_body], $[user_id], $[show_id])
    RETURNING id;
    `, { 
        comment_body, user_id, show_id,
    });
};

module.exports = {
    createComment,
    getAllShowComments,
};