const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)

  .then(function (response) {

    if (!response.ok) {
      throw Error(response.statusText);
    } else {
    return response.json();
    }})

  .then(function (jsonObject) {
    let prophets = jsonObject['prophets'];
    prophets.forEach((prophet) => {
      
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let image = document.createElement('img');

      h2.innerHTML = 
        `${prophet.name} ${prophet.lastname}`;
      card.appendChild(h2);
      p1.innerHTML = 
        `Date of Birth: ${prophet.birthdate}`;
      card.appendChild(p1);
      p2.innerHTML =
        `Birth Place: ${prophet.birthplace}`;
      card.appendChild(p2);
      image.setAttribute('src', prophet.imageurl);
      image.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`);
      card.appendChild(image);
    document.querySelector('div.cards').appendChild(card);
    });
  });
  
 
    
    
   