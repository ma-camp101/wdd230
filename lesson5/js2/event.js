let today = new Date()
let day = getDay();
function event() {
    if(day == 2) {
        friday = "Saturday: Preston Pancakes in the Park! 9 a.m. Saturday at the City Park.";
    }
    else { 
        friday = "";
    }
    document.querySelector(".event").innerHTML = friday;
}
