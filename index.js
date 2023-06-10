// imports
const express = require('express');

// initiate the server at port [default is 3000][with a call back function ]
const app = express();
const port = process.env.PORT || 3000; 
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});

// Host static files || serving web pages located in the 'public folder'
app.use(express.static('public')); 

// Parse incoming data as json
app.use(express.json({ limit: '100kb' }));




// setting up routing to retrieve data from client-side 

app.post('/api', (request, response) => {
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json(data);
  });