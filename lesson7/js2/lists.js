let list = document.querySelector('ul');
let input = document.querySelector('input');
let count = document.querySelector('#count');

let chapterslist = [];

document.addEventListener('DOMContentLoaded', () => { 
  getStoredList(); 
});

function setStoredList() {
  localStorage.setItem('bofmchaps', JSON.stringify(chapterslist))
}

function getStoredList() {
  try {
    let chapters = JSON.parse(localStorage.getItem('bofmchaps'));
    if (chapters.length > 0) {
      count.textContent = chapters.length;
      renderList(chapters);
    }
    else {
      count.textContent = 0;
    }
  }
  catch (er) { 
    count.textContent = 0; 
  }
}

function renderList(chapters) {
  list.innerHTML = '';
  chapters.forEach(item => {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item.chapter;
    deletebutton.textContent = '❌';
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus;
    });
    input.focus();
  });
}

add.addEventListener('click', () => {
  if (input.value != '') {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = input.value;
    deletebutton.textContent = '❌';
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      setStoredList();
      input.focus;
    });

    let entry = {
      "chapter": input.value,
      "date": new Date()
    };

    if (count.textContent != '') {
      count.textContent = parseInt(count.textContent) +1;
    }
    else {
      count.textContent = 1;
    }

  chapterslist.push(entry);
  setStoredList();
  input.value = '';
  input.focus();
  }
});