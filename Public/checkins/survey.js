function setup() {

    /*
    noCanvas();
    const video = createCapture(VIDEO);
    video.size(160, 120);
    */
    let lat, lon, alt;
    let agent = "surveyor";
    const button = document.getElementById('submit');
    button.addEventListener('click', async event => {
        const name = document.getElementById("name").value;
        const type = document.getElementById("type").value;
        const category = document.getElementById("category").value;
        const age = document.getElementById("age").value;
        const structure = document.getElementById("structure").value;
        const morphology = document.getElementById("morphology").value;
        const size = document.getElementById("size").value;
        const reserve = document.getElementById("reserve").value;
        const status = document.getElementById("status").value;
        const notes = document.getElementById("notes").value;
      /*
        video.loadPixels();
      const image64 = video.canvas.toDataURL();
      */
      const data = { agent, lat, lon, alt, name, type, category, age, structure, morphology, size, reserve, status, notes/*image64*/ };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      const response = await fetch('/api', options);
      const json = await response.json();
      console.log(json);
    });
  
    if ('geolocation' in navigator) {
      console.log('geolocation available');
      navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        alt = position.coords.altitude;
        console.log(lat, lon, alt);
        document.getElementById('latitude').textContent = lat;
        document.getElementById('longitude').textContent = lon;
        document.getElementById('altitude').textContent = alt;

        if(alt = 'null'){document.getElementById('altitude').textContent = "Unknown"};

      });
    } else {
      console.log('geolocation not available');
    }
  }