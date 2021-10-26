let today = new Date()
let day = today.getDay();
function eventShow() {
    if(day == 1) {
        document.getElementsByClassName("special").classList.add("reveal");
    }
    else { 
        document.getElementsByClassName("special").classList.remove("reveal");
    }
}
