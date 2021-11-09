let millisecondsToDays = 8640000;
let priorVisit = localStorage.getItem('lastvisit');
prior = document.querySelector(".lastVisit");
prior.addEventListener("onload", lastVisit());
function lastVisit() {
    if (priorVisit != '') {
        visit = ((priorVisit - Date.now()) / millisecondsToDays).toFixed(0);
    }
    else {
        visit = Date.now() + " This is your first visit. Welcome!"
    }
    document.getElementById("lastv").innerHTML = visit;
    localStorage.setItem('lastvisit', Date.now());
}