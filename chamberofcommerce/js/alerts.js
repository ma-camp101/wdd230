const onecallURL = "https://api.openweathermap.org/data/2.5/onecall?&lat=40.4418&lon=-75.3416&units=imperial&appid=5b1c85008a1ef7a21d5e39aa1f79fd44"
fetch(onecallURL)

  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
    return response.json();
    } 
  })
    
  .then((jsonObject) => {

    let businesses = jsonObject['alerts'];
    businesses.onload((alert) => {

      let alerts = document.createElement('section');
      let h2 = document.createElement('h2');
      let sender = document.createElement('p');
      let start = document.createElement('p');
      let end = document.createElement('p');
      let description = document.createElement('p');
      let tags = document.createElement('p');


      h2.innerHTML = `${alert.event}`;
      alerts.appendChild(h2);

      sender.innerHTML = `${alert[0].sender_name}`;
      alerts.appendChild(sender);

      start.innerHTML = `${alert[0].start}`;
      alerts.appendChild(start);

      end.innerHTML = `${alert[0].end}`;
      alerts.appendChild(end);

      description.innerHTML = `${alert[0].description}`;
      alerts.appendChild(description);

      tags.innerHTML = `${alert[0].tags[0]}`;
      alerts.appendChild(tags);
      
    document.querySelector('div.alerts').appendChild(alerts);
    })
});