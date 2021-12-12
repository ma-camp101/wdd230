const forecastURL = "https://api.openweathermap.org/data/2.5/onecall?&lat=40.4418&lon=-75.3416&exclude=hourly&units=imperial&appid=5b1c85008a1ef7a21d5e39aa1f79fd44"

fetch(forecastURL)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }
  })
  .then((jsObject) => {
    const threeday = jsObject.daily;
    
    let day = 1;

    threeday.forEach(forecast => {
      if (day < 4) {
        let thedate = new Date(forecast.dt*1000);
        const imagesrc2 = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        document.querySelector(`#dayofweek${day}`).innerHTML = weekdays[thedate.getDay()];
        document.querySelector(`#icon${day}`).setAttribute('src', `${imagesrc2}`);
        document.querySelector(`#icon${day}`).setAttribute('alt', `${forecast.weather[0].description}`);
        document.querySelector(`#forecast${day}`).innerHTML = `${forecast.temp.day.toFixed(1)}&#176;F`;
      }
      day++;
    })
  })
; 