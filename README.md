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
```
  .
  ├── client                    # React.js frontend application
  │   ├── src                 
  │   │   ├── components        # All React components are here   
  │   │   ├── assets            # Images, files, etc  
  │   │   ├── hooks             # Custom hooks folder
  │   │   ├── utils             # Tools and utilities
  │   │   ├── index.js          # React.js frontend application
  │   │   └── root-styles.css   # Global CSS styling
  │   ├── public                
  │   └── package.json        
  ├── server
  │   ├── api                   # All api routes
  │   ├── models                # Database schema
  │   ├── database.js           # Database setup and connection
  │   └── index.css             # Node.js backend server                    
  ├── package.json                 
  ├── .sample-env               # Env variables to be copied in a .env file   
  └── README.md
```
### Todo
- Create script for out of the box setup
- Add Sass

