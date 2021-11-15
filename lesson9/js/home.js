const homepageurl = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(homepageurl)
  .then(function (response) {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
    return response.json();
    }})
  .then(function (jsonObject) {
    let towns = jsonObject['towns'];
    towns.forEach((town) => {
    if (town.name == "Soda Springs" || town.name == "Fish Haven" || town.name == "Preston"){
      let towns = document.createElement('section');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let p4 = document.createElement('p');
      let image = document.createElement('img');
      if (town.name == "Soda Springs" || "Fish Haven" || "Preston") {
      h2.innerHTML = 
        `${town.name}`;
      towns.appendChild(h2);
      p3.innerHTML = 
        `<strong>Town Motto:</strong><br> "${town.motto}"`;
        towns.appendChild(p3);
      p1.innerHTML = 
        `<strong>Year Founded:</strong> ${town.yearFounded}`;
      towns.appendChild(p1);
      p2.innerHTML =
        `<strong>Town Pop.</strong> ${town.currentPopulation}`;
      towns.appendChild(p2);
      p4.innerHTML =
        `<strong>Average Annual Rainfall:</strong> ${town.averageRainfall}`;
        towns.appendChild(p4);
    }
      if (town.name == "Soda Springs") {
        image.setAttribute('src', 'images/rsz_click-sluice-wu96c5xxii0-unsplash.jpg');  
        image.setAttribute('alt', `${town.name}`);
        towns.appendChild(image);
    } else if( town.name == "Fish Haven"){
        image.setAttribute('src', 'images/rsz_1david-french-tjp6gj8da6q-unsplash.jpg');  
        image.setAttribute('alt', `${town.name}`);
        towns.appendChild(image);
    } else if(town.name == "Preston"){
        image.setAttribute('src', 'images/rsz_11paul-arterburn-x7mpsrrhoe4-unsplash.jpg');  
        image.setAttribute('alt', `${town.name}`);
        towns.appendChild(image);
    }
    document.querySelector('div.towns').appendChild(towns);
    }
    });
  });

