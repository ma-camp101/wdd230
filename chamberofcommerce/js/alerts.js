const onecallurl = "https://api.openweathermap.org/data/2.5/onecall?&lat=40.4418&lon=-75.3416&units=imperial&appid=5b1c85008a1ef7a21d5e39aa1f79fd44"
fetch(onecallurl)

  .then((jsonObject) => {
    let alerts = jsonObject['alerts'];
    alerts.foreach((alert) => {

      let warning = document.createElement('section');
      warning.classList.add('modal-content');

      let h2 = document.createElement('h2');
      let sender = document.createElement('p');
      let start = document.createElement('p');
      let end = document.createElement('p');
      let description = document.createElement('p');
      let tags = document.createElement('p');


      h2.innerHTML = `${alert.event}`;
      warning.appendChild(h2);

      sender.innerHTML = `${alert.sender_name}`;
      warning.appendChild(sender);

      start.innerHTML = `${alert.start}`;
      warning.appendChild(start);

      end.innerHTML = `${alert.end}`;
      warning.appendChild(end);

      description.innerHTML = `${alert.description}`;
      warning.appendChild(description);

      tags.innerHTML = `${alert.tags[0]}`;
      warning.appendChild(tags);
    document.querySelector('div.alerts').appendChild(warning);
    })
  });

      //  let alert = {
    //   "sender_name": "NWS Tulsa",
    //   "event": "Heat Advisory",
    //   "start": 1597341600,
    //   "end": 1597366800,
    //   "description": "...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING...\n* WHAT...Heat index values of 105 to 109 degrees expected.\n* WHERE...Creek, Okfuskee, Okmulgee, McIntosh, Pittsburg,\nLatimer, Pushmataha, and Choctaw Counties.\n* WHEN...From 1 PM to 8 PM CDT Thursday.\n* IMPACTS...The combination of hot temperatures and high\nhumidity will combine to create a dangerous situation in which\nheat illnesses are possible.",
    //   "tags": [
    //     "Extreme temperature value"
    //     ]
    //   }
