const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=5b1c85008a1ef7a21d5e39aa1f79fd44"
fetch(weatherURL)

  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
    return response.json();
    }})
    
  .then((jsObject) => {

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';

    document.getElementById('currenticon').setAttribute('src', `${imagesrc}`);
    document.getElementById('currenticon').setAttribute('alt', `${jsObject.weather[0].description}`);
    document.getElementById('weatherdesc').innerHTML = `${jsObject.weather[0].description}`;
    document.getElementById('temp').innerHTML = `${jsObject.main.temp.toFixed(1)}&#176;F`;
    document.getElementById('hightemp').innerHTML = `${jsObject.main.temp_max.toFixed(1)}&#176;F`;
    document.getElementById('humidity').innerHTML = `${jsObject.main.humidity}%`;
    document.getElementById('wind').innerHTML = `${jsObject.wind.speed.toFixed(1)}mph`;
    windChill(jsObject);
});

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=5b1c85008a1ef7a21d5e39aa1f79fd44"

fetch(forecastURL)

  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }})

    .then((jsObject) => {
      const sixpm = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
      let day = 1;

      sixpm.forEach(forecast => {

        let thedate = new Date(forecast.dt_txt);
        const imagesrc2 = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        document.querySelector(`#dayofweek${day}`).innerHTML = weekdays[thedate.getDay()];
        document.querySelector(`#icon${day}`).setAttribute('src', `${imagesrc2}`);
        document.querySelector(`#icon${day}`).setAttribute('alt', `${forecast.weather[0].description}`);
        document.querySelector(`#forecast${day}`).innerHTML = `${forecast.main.temp.toFixed(1)}&#176;F`;
        day++;
    })
  }); 
