const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=5b1c85008a1ef7a21d5e39aa1f79fd44"
fetch(apiURL)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
    return response.json();
    }})
  .then((jsObject) => {
    windChill(jsObject)
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description; 
    const sixpm = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    document.getElementById('currenticon').setAttribute('src', imagesrc);
    document.getElementById('currenticon').setAttribute('alt', desc);
    document.getElementById('weatherdesc').innerHTML = `${jsObject.weather[0].description}`;
    document.getElementById('temp').innerHTML = `${jsObject.main.temp.toFixed(1)}&#176;F`;
    document.getElementById('hightemp').innerHTML = `${jsObject.main.temp_max.toFixed(1)}&#176;F`;
    document.getElementById('humidity').innerHTML = `${jsObject.main.humidity}%`;
    document.getElementById('wind').innerHTML = `${jsObject.wind.speed.toFixed(1)}mph`;
    sixpm.forEach(forecast => {
      let day = 0;
      let thedate = new Date(forecast.dt_txt);
      const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      document.querySelector(`#dayofweek${day + 1}`).innerHTML = weekdays[thedate.getDay()];
      document.querySelector(`#forecast${day + 1}`).innerHTML = forecast.main.temp;
      day++
    }); 
  });