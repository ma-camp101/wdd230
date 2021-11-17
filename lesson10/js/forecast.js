const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=5b1c85008a1ef7a21d5e39aa1f79fd44"
fetch(apiURL)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
    return response.json();
    }})
  .then((jsObject) => {
    console.log(jsObject)
    windChill(jsObject)
    document.getElementById('temp').innerHTML = `${jsObject.main.temp} &#176;F`;
    document.getElementById('')
});
