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
    document.getElementById('currenticon').setAttribute('src', imagesrc);
    document.getElementById('currenticon').setAttribute('alt', desc);
    document.getElementById('weatherdesc').innerHTML = `${jsObject.weather[0].description}`;
    document.getElementById('temp').innerHTML = `${jsObject.main.temp.toFixed(1)}&#176;F`;
    document.getElementById('hightemp').innerHTML = `${jsObject.main.temp_max.toFixed(1)}&#176;F`;
    document.getElementById('humidity').innerHTML = `${jsObject.main.humidity}%`;
    document.getElementById('wind').innerHTML = `${jsObject.wind.speed.toFixed(1)}mph`
  });
fetch(apiURL)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
    return response.json();
    }})
  .then((fiveDay) => {
    const sixpm = fiveDay.list.filter(x => x.dt_txt.includes('18:00:00'));
    sixpm.forEach(forecast => {
      let day = 0;
      let thedate = new Date(forecast.dt_txt);
      document.querySelector(`#dayofweek${day + 1}`).innerHTML = thedate.getDay();
      day++
    });
  });
  // 
  //   const imagesrc = 'https://openweathermap.org/img/w/' + fiveDay.weather[0].icon + '.png';
  //   const desc = fiveDay.weather[0].description; 
  //   document.getElementById('forecast1')
  //