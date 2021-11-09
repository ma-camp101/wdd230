let today = new Date()
let day = today.getDay();
let saturdayMsg = document.querySelector(".special");
saturdayMsg.addEventListener("onload", eventShow());
function eventShow() {
    if(day == 5) { saturdayMsg.classList.add("reveal"); }
    else { saturdayMsg.classList.remove("reveal"); }}