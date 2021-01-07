const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const app = express();

// Uncomment the following line if you have setup MongoDB
// require('./database.js');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/build')));

// All API routes should come here
app.use('/api/health', require('./api/health'));
app.use('/api/users', require('./api/users'));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(process.env.PORT);
console.log(`MERN App listening on port ${process.env.PORT}`);
