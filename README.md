# Instructions
This code can be run using "npm start" (localhost:3000) for the backend folder (https://github.com/danielleleb/gnomes-backend), and "ng serve" for the frontend on localhost:4200.

# Description
This app displays all the information of all gnomes. All users are able to view the names and profile pictures of all of the gnomes, but only logged in users can view friends and professions.

All of the gnomes are listed on the landing page as a list. Each gnomes profile can be viewed by clicking on their profile picture or name. The selected gnome's profile then appears in a modal. Users are requested to log in to view full information. After logging in (or signing up), users are then redirected back to the landing/search page. 

# Languages Used
To create this app, I used the MEAN stack with Angular 5. In the backend, I used Axios to access the data through the URL. 

# Search and Filter
All gnomes are listed on load, including name, age and display picture. Gnomes can be searched by name, using a pipe on the frontend, rather than through the backend to help decrease loading and reloading time.

To order the gnomes by age, I initially thought of using a pipe - but instead created a method bound to the checkbox on click.

# Authentication and Authorization
All users are able to search and filter gnomes, but only logged in users are able to view the friends and professions of the gnomes.

Login and signup components are both accessible through the '/auth' page, and minimum lengths are required for account creation and login (I have also provided error messages in case of invalid information or existing usernames).


