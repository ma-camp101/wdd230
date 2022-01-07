const onecallurl = "https://api.openweathermap.org/data/2.5/onecall?&lat=40.4418&lon=-75.3416&units=imperial&appid=5b1c85008a1ef7a21d5e39aa1f79fd44"
fetch(onecallurl)

.then((response) => response.json())

  .then((jsonObject) => {
    let alerts = jsonObject['alerts'];
  
      alerts.forEach((alert) => {

        let startDate = new Date(alert.start*1000);
        let endDate = new Date(alert.end*1000);
  
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
  
        start.innerHTML = `${startDate}`;
        warning.appendChild(start);
  
        end.innerHTML = `${endDate}`;
        warning.appendChild(end);
  
        description.innerHTML = `${alert.description}`;
        warning.appendChild(description);

        tags.innerHTML = `${alert.tags[0]}`;
        warning.appendChild(tags);
      document.querySelector('div.alerts').appendChild(warning);
      });
  });