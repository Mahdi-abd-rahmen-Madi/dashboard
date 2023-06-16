const express = require('express');
const Datastore = require('nedb');

/*
const fetch = require('node-fetch');
require('dotenv').config();
*/

// initiate the server at port [default is 3000][with a call back function ]
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});

// Host static files || serving web pages located in the 'public folder'
app.use(express.static('public'));
// Parse incoming data as json with a limit of 1mb per database entry
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

//// setting up routing to retrieve data from client-side 

app.post('/api', (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
});

/*
app.get('/weather/:latlon', async (request, response) => {
  console.log(request.params);
  const latlon = request.params.latlon.split(',');
  console.log(latlon);
  const lat = latlon[0];
  const lon = latlon[1];
  console.log(lat, lon);
  const api_key = process.env.API_KEY;
  const weather_url = `https://api.darksky.net/forecast/${api_key}/${lat},${lon}/?units=si`;
  const weather_response = await fetch(weather_url);
  const weather_data = await weather_response.json();

  const aq_url = `https://api.openaq.org/v1/latest?coordinates=${lat},${lon}`;
  const aq_response = await fetch(aq_url);
  const aq_data = await aq_response.json();

  const data = {
    weather: weather_data,
    air_quality: aq_data
  };
  response.json(data);
});

*/
