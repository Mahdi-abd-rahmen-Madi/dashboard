// Geo Locate
let lat, lon, acc, alt, altacc, speed /*weather, air*/;
let agent="user";

if ('geolocation' in navigator) {
  console.log('geolocation available');
  navigator.geolocation.getCurrentPosition(async position => {
    try {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      acc = position.coords.accuracy;
      alt = position.coords.altitude;
      altacc = position.coords.altitudeAccuracy;
      speed = position.coords.speed;
      document.getElementById('latitude').textContent = lat.toFixed(2);
      document.getElementById('longitude').textContent = lon.toFixed(2);
      document.getElementById('accuracy').textContent = acc.toFixed(2);
      document.getElementById('altitude').textContent = alt.toFixed(2);
      document.getElementById('altitudeaccuracy').textContent = altacc.toFixed(2);
      document.getElementById('speed').textContent = speed.toFixed(2);



      /*
      const api_url = `weather/${lat},${lon}`;
      const response = await fetch(api_url);
      const json = await response.json();
      weather = json.weather.currently;
      air = json.air_quality.results[0].measurements[0];
      document.getElementById('summary').textContent = weather.summary;
      document.getElementById('temp').textContent = weather.temperature;
      document.getElementById('aq_parameter').textContent = air.parameter;
      document.getElementById('aq_value').textContent = air.value;
      document.getElementById('aq_units').textContent = air.unit;
      document.getElementById('aq_date').textContent = air.lastUpdated;
      */

    } catch (error) {
      console.error(error);

      document.getElementById('altitude').textContent = "NO READING";
      /*
      air = { value: -1 };
      document.getElementById('aq_value').textContent = 'NO READING';
      */
    }

    const data = { agent, lat, lon, alt/*weather, air*/ };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const db_response = await fetch('/api', options);
    const db_json = await db_response.json();
    console.log(db_json);
  });
} else {
  console.log('geolocation not available');
}
