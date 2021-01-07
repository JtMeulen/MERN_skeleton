# MERN Stack skeleton
Clone this repo to setup your basic MERN stack.

### Setup for Heroku
- Have Heroku toolbelt installed and make sure you have an account
- Clone this repo and run ```npm install```
- Navigate to /client and run ```npm run build```
- In the root folder run:
  ```
  $ heroku create
  $ git push heroku master
  ```

### MongoDB connection
- Create a MongoDB account and setup a new cluster
- Copy the variables from .sample-env to a new .env file and add the correct details
- Uncomment line 8 in the root index.js file

### Local development
- In the root folder run ```npm run dev``` which runs the server and client concurrently

### Folder structure
  .
  ├── client                  # React.js frontend application
  │   ├── src                 # Load and stress tests
  │   ├── public              # End-to-end, integration tests (alternatively `e2e`)
  │   └── package.json        # Unit tests
  ├── server                  # Node.js backend server
  ├── package.json            # Tools and utilities      
  ├── .sample-env             # Env variables to be copied in a .env file   
  └── README.md

### Todo
- Polish Readme file
- Add nodemon
- Update react folder structure
