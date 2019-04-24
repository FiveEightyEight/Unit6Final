# **TV Show Watchlist**
___
>  [**Unit 6 Final**](https://github.com/joinpursuit/PCNW-Web-Final)

||Table Of Contents|
|:--|:----:|
|1| [Home](https://github.com/FiveEightyEight/Unit6Final/tree/master/frontend#home)|
|2| [Users](https://github.com/FiveEightyEight/Unit6Final/tree/master/frontend#users)|
|3| [Watchlists](https://github.com/FiveEightyEight/Unit6Final/tree/master/frontend#navigating-to-the-users-page-displays-a-list-of-all-users-on-the-platform-clicking-on-the-person-icon-next-to-the-username-allows-for-you-to-switch-between-accounts)|
|4| [Show Profile](https://github.com/FiveEightyEight/Unit6Final/tree/master/frontend#show-profile)|
|5| [TV Shows](https://github.com/FiveEightyEight/Unit6Final/tree/master/frontend#tv-shows)|
|6| [Adding](https://github.com/FiveEightyEight/Unit6Final/tree/master/frontend#adding)|
___
## **Home** 

> ![Home Screen Image](https://lh3.googleusercontent.com/S0jmd5veRAKd0UwjNUbhnQmlqYtkz8zMrlmx7-TizYaSdSYklqW4-7d8nf7KP9nDgxwBoWaiMNyGSJTB7_RxiM4XQnCPbUhF7ghNj7MWs8JObXF9tuAdTLsFshmYduKWW11ny8ry768xJ2c4_g15hB1Fwr6ZW8iCo0YKnR83PV6OWwdzN6ZXTpZPXSiYVXmBrlvBBpH2JrWDWBannVi40u62vKvltOebRNOVSPvyb_YM3tHA59ntvDLw4OuKCPshGcpFsK9yIWeD_V9c5x3S6Rhy4DSdtPwrQb-AlrsWPYKOeXEqHg6PIa_FQLvIE50vJYCb6RFgrCcKTPLGgX5WZAUnoy6KQiaQyJil93uceJuHfoSkLbkJN2GkbM4zTLVa8Cyk4N5qWkbb5GILo_nQq7Nc22ggU69S7R0n5B5dUlpAXDwVpeW4riKmLc_bTZG5E8wRcUQ_FY93BkIMkJ19wuQmtZvrjMMRhnEeCdyvTA8FfD_DMDPYvHiud7Abi-mNGxrdJb6eiytHjHgV8g9kM091jCyIzxd6r1W-5I7feFqT-d6OE4XDVwsApRCwfF1s9Kst0FTpXnX0jm_CP4UliHY0Lr7_4vzaDoDoNhTQa4c85oQkGuowbBJ___pI98eng0xUZ-Zcol4Pa88qV2r9EqfBkjU1vv2xs5lXe-fXAg_YQ5MLE4T_VOq-dc4HS77BUb5MrV3t7q1j4Cln4tL0gl1c=w260-h833-no)

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

