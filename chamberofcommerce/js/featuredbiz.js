const businesses = 'json/businesses.json';
fetch(businesses)

  .then(function (response) {

    if (!response.ok) {
      throw Error(response.statusText);
    } else {
    return response.json();
    }})

  .then(function (jsonObject) {
    let businesses = jsonObject['businesses'];
    const myarray = [-1, -1, -1]; 
    for (i=0; i<myarray.length; i++) {
      let unique = false;
      let temp = -1;
      while (!unique) {
        temp = Math.floor (Math.random() * businesses.length);
        unique = true;
        for (j=0; j<myarray.length; j++) {
          if (myarray[j] == temp) {
            unique = false;
          }
        }
     
      }
      myarray[i] = temp;
    }
    myarray.forEach((temp) => { 
      const business = businesses[temp];
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let logo = document.createElement('img');
      let photo = document.createElement('img');
      let summary = document.createElement('p');
      let website = document.createElement('a');
      let address = document.createElement('p');
      let address2 = document.createElement('p');
      let phone = document.createElement('p');
      let hours = document.createElement('p');


      h2.innerHTML = `${business.name}`;
      card.appendChild(h2);

      logo.setAttribute('src', business.logo);
      logo.setAttribute('alt', `${business.logoalt}`);
      card.appendChild(logo);

      summary.innerHTML = `${business.summary}`;
      card.appendChild(summary);

      website.setAttribute('href', business.website);
      card.appendChild(website);

      address.innerHTML = `${business.address}`;
      card.appendChild(address);

      address2.innerHTML = `${business.address2}`;
      card.appendChild(address2);

      phone.innerHTML = `${business.phone}`;
      card.appendChild(phone);

      hours.innerHTML = `${business.hours}`;
      card.appendChild(hours);

      photo.setAttribute('src', business.photo);
      photo.setAttribute('alt', `${business.photoalt}`);
      card.appendChild(photo);
      
    document.querySelector('div.featuredbiz').appendChild(card);
    });
  });