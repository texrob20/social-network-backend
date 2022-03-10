# NoSQL: Social Network API

GIVEN a social network API:
- WHEN I enter the command to invoke the application THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia for users and thoughts THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Created With:
- Node js
  - Express
  - Mongoose
- MongoDB

## Social Network API
This backend server creates a database with users and their thoughts.  The user model contains a username, email, thoughts, and friends for that user.  In addition, the database maintains a count of friends a user has.  The thought model contains the text, the username of the creator, and reactions to the thought. In addition, the database maintains a count of reactions a thought has. 

### User Routes
There are user API routes to get all users, get a single user, create a new user, update a user information, and delete a user.  In addition user friends API routes add or delete friends based on their id.

### Thought Routes
There are thought API routes to get all thoughts, get a single thought, create a new thought, update a thought, and delete a thought.  In addition, thought reaction API add or delete reactions to a thought.

### Demo
The demo video shows the API routes being tested using Insomnia.

The video can be found at:

https://github.com/texrob20/social-network-backend/blob/main/demo/social-network-demo.webm

or

https://drive.google.com/file/d/1EHWzNljZjJu-fPLDdypWJFzAFZ2VCNrq/view
