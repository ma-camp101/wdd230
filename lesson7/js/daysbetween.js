let millisecondsToDays = 8640000;
let priorVisit = localStorage.getItem('lastvisit');
prior = document.querySelector(".lastVisit");
prior.addEventListener("onload", lastVisit());
function lastVisit() {
    debugger;
    if (priorVisit != '') {
        visit = ((priorVisit - today) / millisecondsToDays).toFixed(0);
    }
    else {
        visit = today + " This is your first visit. Welcome!"
    }
    document.getElementById("lastv").innerHTML = visit;
    localStorage.setItem('lastvisit', today);
}