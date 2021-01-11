# MERN Stack Boilerplate
A MERN stack boilerplate application with Redux.js. 

### Installation
- Download this project and run ```npm run setup``` in the root folder
- Make an initial git commit:
  ```
  $ git init
  $ git add -A && git commit -m "initial commit"
  ```
- Have [Heroku toolbelt](https://devcenter.heroku.com/articles/heroku-cli) installed and make sure you have an [Heroku](https://www.heroku.com/) account
- In the root folder run:
  ```
  $ heroku create
  $ git push heroku master 
  ```

### Deployment
- Commit your latest changes and run ```$ git push heroku master```

### MongoDB connection
- Create a [MongoDB](https://www.mongodb.com/) account and create a new cluster/database
- Copy the variables from [.sample-env](.sample-env) to a new .env file and add the correct details
- Uncomment [this line](./server/index.js#L8) in the server/index.js file

### Local development
- In the root folder run ```npm run dev``` which runs the server and client concurrently
- Or run both ```npm run dev-client``` and ```npm run dev-server``` in separate terminals

### Folder structure
```
  .
  ├── client                    # React.js frontend application
  │   ├── src                 
  │   │   ├── components        # All React components are here   
  │   │   ├── assets            # Images, files, etc  
  │   │   ├── hooks             # Custom hooks folder
  │   │   ├── store             # Redux store related files
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
- Add Sass
