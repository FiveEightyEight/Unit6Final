# **TV Show Watchlist**
___
>  [**Unit 6 Final**](https://github.com/joinpursuit/PCNW-Web-Final)

||Table Of Contents|
|:--|:----:|
|1| [Home](https://github.com/FiveEightyEight/Unit6Final/blob/FE_Containers%26Components/frontend/README.md#home)|
|2| [Users](https://github.com/FiveEightyEight/Unit6Final/blob/FE_Containers%26Components/frontend/README.md#users)|
|3| [Watchlists](https://github.com/FiveEightyEight/Unit6Final/blob/FE_Containers%26Components/frontend/README.md#navigating-to-the-users-page-displays-a-list-of-all-users-on-the-platform-clicking-on-the-person-icon-next-to-the-username-allows-for-you-to-switch-between-accounts)|
|4| [Show Profile](https://github.com/FiveEightyEight/Unit6Final/blob/FE_Containers%26Components/frontend/README.md#show-profile)|
|5| [TV Shows](https://github.com/FiveEightyEight/Unit6Final/blob/FE_Containers%26Components/frontend/README.md#tv-shows)|
|6| [Adding](https://github.com/FiveEightyEight/Unit6Final/blob/FE_Containers%26Components/frontend/README.md#adding)|
___
## **Home** 

> ![Home Screen Image](https://lh3.googleusercontent.com/6-vHUNxM4dmGw0rao_ch6nhF6VWCT86duMkM3cRRtt5ONu7rqsm7eDdQQUooOhuohTv1eFzSuU6jtRdQsH36PtQ3-3ZLI-ledonrFETal1pU-4sVuujfr1pS2NAkZ9BVjNa9b9gR4Lnm0XCq7ENQpM9PogUvw7AsQM3hfu-WDm6pUebuFFzTiNzPHsW3V5o6ydLY1hAOloj6-qCvLs7XUQOrAUOFa1Ydx1jof4xj-fJXwK3zAfkEkqDFXYLVnv6tISFfSvWgpi5EYNoPeULC9e0NhCMgL22iZzGO4HyUzmDR1pHX85fdzSC-lVx9MtYo4G6rxZ9_8IZvJmoj74WYh-XU5EWQMkPO6rcjfL6vm2gi-jmZF39IB9NvSmeIpZFfSE8bZCz2rlExqAO-a49roFrua2JSYPBLssFUXHxqCRnG6Gj22VqMEuimYiIxrWbPRynOy4N-FdUBhppRK5hjJu1WfRlGNfxqvhDzgS43tBfIuSplxrLWVk5H6afg9SnTbaJCQgk_j6sa1YCw75rg27Jdigowmnm3nCHgUl57hnXAklP4LBXd1tyAqRn1Qt12I4k1kSU2dA457QK7bTiALymvguqU3ajLsT7dLFHZaOJpeqUWx00ezLbLoAp_g4j-o0pMT1ok_WJFb7_tzgh7LCdvJYOwU0g=w260-h1282-no)

#### TV Show Watchlist home page is what a users sees upon first visit to the website. Users are greeted with a simple banner. A navigation bar at the top of the page is available to navigate to the other parts of the website. 
___
## **Users**

> ![Users Screen Image](https://media.giphy.com/media/t5YIKZn6JL38B6l2VT/giphy.gif)

#### Navigating to the Users page displays a list of all users on the platform. Clicking on the _person_ icon next to the username allows for you to switch between accounts. 
||User Profile Examples||
|:--:|:--:|:--:|
|Current User Profile| | Other User Profile|
|![Current User Profile](https://media.giphy.com/media/3bzB1KLvMP6sAk9IbQ/giphy.gif)||![Other User Profile](https://media.giphy.com/media/3vsK6qxMzv80Y6Zo44/giphy.gif)|

#### Clicking on a username will take you to the user's TV show watchlist. If you know the user's `id` you can navigate to their profile following the path below after the hash (`#`) fragment. 
### **Path**: `/#/user/<id>` 
> **NOTE**: _All profiles look alike regardless of which user is currently logged in._
___
## **Show Profile**

> ![User's Show Profile](https://media.giphy.com/media/9xjNIzzNvmUyDC5ddR/giphy.gif)

#### When a show is clicked on, from a user's watchlist, you are redirected to the user specific show profile. You may also navigate directly to the show's profile if you know its `id` by following the path below after the hash (`#`) fragment.
### **Path**: `/#/show/<id>` 

||Watchlist Example||
|:---:|:---:|:---:|
|Jon Snow's GoT Show Profile Page | |Daenerys Targaryen's GoT Show Profile Page|
|![Jon's GoT Show Profile Page gif](https://media.giphy.com/media/82wXhky0HNMnIafmzL/giphy.gif)||![Daenerys' GoT Show Profile Page gif](https://media.giphy.com/media/5UFK8Jfo5nkI7X04Xy/giphy.gif)|

> **NOTE**: _Shows on user watchlists are independent of other shows with the same title on other user's watchlists._

||Show Profile Comments||
|:--:|:--:|:--:|
||![Show Profile Comment Gif](https://media.giphy.com/media/3XERpkp1ItOJVWn89m/giphy.gif)||
#### Users are able to comment on a show's profile page. Comments are displayed in reverse chronological order with the message above the respective user's name.
___
## **TV Shows**

> ![TV Show page navigation gif](https://media.giphy.com/media/3CZ2kyi1jvmJrUShwV/giphy.gif)

#### Navigating to the TV Shows page will display all TV Shows in the database. TV shows that share the **_exact_** title are only shown once with a list of users who are currently watching the respective TV show.


||Respective User's Show Profile||
|:--:|:--:|:--:|
||![Respective user show profile gif](https://media.giphy.com/media/4ZvubG7WdWpFsiAOIc/giphy.gif)||
#### Clicking on a the user's name in _Who's Watching?_ will redirect you to that user's respective show profile.
___
## **Adding**

||Adding a TV Show||
|:--:|:--:|:--:|
|Valid TV Show Addition||Invalid TV Show Addition|
|![Add New TV Show gif](https://media.giphy.com/media/93lR80Egh3k9sWQHmk/giphy.gif)||![Adding an Invalid TV Show gif](https://media.giphy.com/media/Dr2ROaLmIxczQ6ceaM/giphy.gif)|

#### Navigating to the _Add_ page, users are able to add a TV show to their watchlist. Adding a TV show **requires** a _title_, a **valid** image url, and a _genre_. Once the new TV show is successfully added, the user is redirected to the show's unique profile page.

> **NOTE**: _Currently, url validation checks for a valid **url**, **NOT** a valid url **image**._
___ 

## **Next Step**
#### Project backend to be deployed on Heroku with use of [Travis](https://Travis-ci.org) for CI/CD. 

