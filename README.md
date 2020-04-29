# SessionsBasics in nodeJS.
A basic project on session creation, destruction and storing in mongoDB. This is not a A-Z reference for sessions. I have only implemented
a very basic approach to understand the sessions.

1. before running the project use 'npm install'. which will let you download all the required packages.
2. I have used connect-mongodb-session to store the sessions in Mongo DB.
3. the URL option in the app.js file is left empty. add your mongoDB connection url over their.
4. Initially there wont be any user in the DB. but whenever you run the app.js file a user will be created.
5. in line 39 in app.js file replace the existing object ID with the one you have created in the MongoDB. 
6. I have used EJS as the view engine. and added few condtions in the views as well.
