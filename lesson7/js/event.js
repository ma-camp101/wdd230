let today = new Date()
let day = today.getDay();
function eventShow() {
    if(day == 5) {
        document.getElementsById("special").classList.add("reveal");
    }
    else { 
        document.getElementById("special").classList.remove("reveal");
    }
}
eventShow();