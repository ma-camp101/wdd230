function lastVisit() {
    let today = new Date();
    let millisecondsToDays = 8640000;
    let priorVisit = localStorage.getItem('lastvisit');
    let obj = new Date(priorVisit);
    if (priorVisit != '') {
        visit = ((today - obj) / millisecondsToDays).toFixed(2);
    }
    else {
        visit = today + " This is your first visit. Welcome!"
    }
    document.getElementById("lastv").innerHTML = visit;
    localStorage.setItem('lastvisit', today);
}
lastVisit();