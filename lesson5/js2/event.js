let today = new Date()
let day = today.getDay();
function event() {
    if(day == 3) {
        friday = "Saturday: Preston Pancakes in the Park! 9 a.m. Saturday at the City Park.";
    }
    else { 
        friday = "";
    }
    document.getElementById("event").innerHTML = friday;
}
