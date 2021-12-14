const onecallurl = "https://api.openweathermap.org/data/2.5/onecall?&lat=40.4418&lon=-75.3416&units=imperial&appid=5b1c85008a1ef7a21d5e39aa1f79fd44"
fetch(onecallurl)

  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
    return response.json();
    } 
  })
    
  .then((jsonObject) => {
    let businesses = jsonObject['alerts'];
     let alert = {
      "sender_name": "NWS Tulsa",
      "event": "Heat Advisory",
      "start": 1597341600,
      "end": 1597366800,
      "description": "...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING...\n* WHAT...Heat index values of 105 to 109 degrees expected.\n* WHERE...Creek, Okfuskee, Okmulgee, McIntosh, Pittsburg,\nLatimer, Pushmataha, and Choctaw Counties.\n* WHEN...From 1 PM to 8 PM CDT Thursday.\n* IMPACTS...The combination of hot temperatures and high\nhumidity will combine to create a dangerous situation in which\nheat illnesses are possible.",
      "tags": [
        "Extreme temperature value"
        ]
      }
    // businesses.((alert) => {

      let alerts = document.createElement('section');
      let h2 = document.createElement('h2');
      let sender = document.createElement('p');
      let start = document.createElement('p');
      let end = document.createElement('p');
      let description = document.createElement('p');
      let tags = document.createElement('p');


      h2.innerHTML = `${alert.event}`;
      alerts.appendChild(h2);

      sender.innerHTML = `${alert.sender_name}`;
      alerts.appendChild(sender);

      start.innerHTML = `${alert.start}`;
      alerts.appendChild(start);

      end.innerHTML = `${alert.end}`;
      alerts.appendChild(end);

      description.innerHTML = `${alert.description}`;
      alerts.appendChild(description);

      tags.innerHTML = `${alert.tags[0]}`;
      alerts.appendChild(tags);
    document.querySelector('div#alerts').appendChild(alerts);
    // })
});

function alertsFunc () {
  let alert = {
    "sender_name": "NWS Tulsa",
    "event": "Heat Advisory",
    "start": 1597341600,
    "end": 1597366800,
    "description": "...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING...\n* WHAT...Heat index values of 105 to 109 degrees expected.\n* WHERE...Creek, Okfuskee, Okmulgee, McIntosh, Pittsburg,\nLatimer, Pushmataha, and Choctaw Counties.\n* WHEN...From 1 PM to 8 PM CDT Thursday.\n* IMPACTS...The combination of hot temperatures and high\nhumidity will combine to create a dangerous situation in which\nheat illnesses are possible.",
    "tags": [
      "Extreme temperature value"
      ]
    }
  // businesses.((alert) => {

    let alerts = document.createElement('section');
    let h2 = document.createElement('h2');
    let sender = document.createElement('p');
    let start = document.createElement('p');
    let end = document.createElement('p');
    let description = document.createElement('p');
    let tags = document.createElement('p');


    h2.innerHTML = `${alert.event}`;
    alerts.appendChild(h2);

    sender.innerHTML = `${alert.sender_name}`;
    alerts.appendChild(sender);

    start.innerHTML = `${alert.start}`;
    alerts.appendChild(start);

    end.innerHTML = `${alert.end}`;
    alerts.appendChild(end);

    description.innerHTML = `${alert.description}`;
    alerts.appendChild(description);

    tags.innerHTML = `${alert.tags[0]}`;
    alerts.appendChild(tags);
    
  document.querySelector('div#alerts').appendChild(alerts);
}
alertsFunc();