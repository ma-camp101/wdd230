function lastVisit() {

    let today = new Date();
    let millisecondsToDays = 8640000;
    let prior = localStorage.getItem('lastvisit');
    let obj = new Date(prior);

    if (prior != '') {
        visit = ((today - obj) / millisecondsToDays).toFixed(0);
    }else {
        visit = today + " This is your first visit. Welcome!"
    }
    
    document.getElementById("lastv").innerHTML = visit + " days ago. Welcome!";
    localStorage.setItem('lastvisit', today);
}
lastVisit();