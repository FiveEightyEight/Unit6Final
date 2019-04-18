# TV Show Watchlist API

||Table Of Contents|
|:--|:----:|
|1| [Users](http://temp)|
|2| [Genres](http://temp)|
|3| [Shows](http://temp)|
|4| [Comments](http://temp)|

___
## **/users**
- **[GET]** `/users/all`
    > Returns list of all users in the database.

- **[GET]** `/users/:id`
    > Returns users, if any, with matching id (_number string_)

- **[POST]** `/users/`
    > Create new user, requires **_`username`_** passed through the body. Returns user _id_ that was created.
   -  > Input: `'{ "username": (_string_) }'`
   -  > Output: `'{ "id": (_number string_) }'`
___

## **/genres**
- **[GET]** `/genres/all`
    > Returns list of all genres in the database.
___

## **/shows**
- **[GET]** `/shows/all`
    > Returns list of all shows in database.
    - > _Note:_ This will return shows with duplicate names.
 
- **[GET]** `/shows/all/user/:user_id`
    > Returns list of all shows followed by user matching id (_number_)

- **[GET]** `/shows/all/genre/:genre`
    > Retuns list of all shows in database matching genre id (_number_)

- **[GET]** `/shows/:id`
    > Returns show, if any, based on show id (_number string_)

- **[GET]** `/shows/:title`
    > Returns show, if any, based on show title (_string_)

- **[POST]** `/shows/`
    > Create new show, requires  **_`title, img_url, user_id, genre_id`_** passed through the body. Returns show _id_ that was created.
   -  > Input: `'{ 
    "title": (_string_), 
    "img_url": (_string_), 
    "user_id": (_number string_),
    "genre_id": (_number string_)
     }'`
   -  > Output: `'{ "id": (_number string_) }'`
___
## **/comments**
- **[GET]** `/comments/all/:show_id`
    > Returns list of all comments for a specific show based on its id (_number string_)

- **[POST]** `/comments/`
    > Create new comment, requires  **_`comment_body, user_id, show_id `_** passed through the body. Returns show _id_ that was created.
   -  > Input: `'{ 
    "comment_body": (_string_), 
    "user_id": (_number string_),
    "show_id": (_number string_)
     }'`
   -  > Output: `'{ "id": (_number string_) }'`

___


Project [Ask Page](https://github.com/joinpursuit/PCNW-Web-Final) 