let today = new Date()
let day = today.getDay();
function event() {
    let message = document.querySelector("special");
    if(day == 5) {
        message.classList.toggle("reveal");
    }
    else { 
        message.classList.toggle("special");
    }
}
