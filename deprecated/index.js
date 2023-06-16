// imports
const express = require('express');
const Datastore = require('nedb');

// initiate the server at port [default is 3000][with a call back function ]
const app = express();
const port = process.env.PORT || 3000; 
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});

// Host static files || serving web pages located in the 'public folder'
app.use(express.static('public'));

// Parse incoming data as json
app.use(express.json({ limit: '1mb' }));

// create Type 2 database : persistent datastore with manual loading
const database = new Datastore('database.db');
database.loadDatabase();



// setting up Get Request
app.get('/api', (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});


// setting up routing to retrieve data from client-side 
app.post('/api', (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
});

  
