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

    if (town.name == "Fish Haven"){
      let towns = document.createElement('section');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');

        h2.innerHTML = 
          `${town.name}`;
        towns.appendChild(h2);
        p1.innerHTML = 
          `${town.events[0]}`;
        towns.appendChild(p1);
        p2.innerHTML =
          `${town.events[1]}`;
        towns.appendChild(p2);
        p3.innerHTML = 
        `${town.events[2]}`;
        towns.appendChild(p3);
      document.querySelector('div.events').appendChild(towns);
      }
    });
  });