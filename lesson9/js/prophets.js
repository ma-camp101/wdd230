let requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    let prophets = jsonObject['prophets'];
    prophets.forEach((prophet) => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      h2.innerHTML = 
        prophet.name + ' <spar style="color:navy">' + prophet.lastname + '</spar>';
    card.appendChild(h2);
    document.querySelector('div.cards').appendChild(card);
    });
  });
  
 
    
    
   