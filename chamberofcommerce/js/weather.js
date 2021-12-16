const onecallURL = "https://api.openweathermap.org/data/2.5/onecall?&lat=40.4418&lon=-75.3416&units=imperial&appid=5b1c85008a1ef7a21d5e39aa1f79fd44"
fetch(onecallURL)

  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
    return response.json();
    }})
    
  .then((jsObject) => {

    const imagesrc = ' https://openweathermap.org/img/wn/' + jsObject.current.weather[0].icon + '.png';

    document.getElementById('currenticon').setAttribute('src', `${imagesrc}`);
    document.getElementById('currenticon').setAttribute('alt', `${jsObject.current.weather[0].description}`);
    document.getElementById('weatherdesc').innerHTML = `${jsObject.current.weather[0].description}`;
    document.getElementById('temp').innerHTML = `${jsObject.current.temp.toFixed(1)}&#176;F`;
    document.getElementById('humidity').innerHTML = `${jsObject.current.humidity}%`;
    document.getElementById('wind').innerHTML = `${jsObject.daily[0].wind_speed.toFixed(1)}mph`;
    windChill();
});