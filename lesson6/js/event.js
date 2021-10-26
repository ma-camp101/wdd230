let today = new Date()
let day = today.getDay();
function eventShow() {
    if(day == 1) {
        document.getElementsByClassName("special").classList.add("reveal");
    }
    else { 
        document.getElementById("special").classList.remove("reveal");
    }
}
// const today = new Date(); 
// const weekday = parseInt(today.getDay());  
// function hideMessage() {     
//     if (weekday == 5) {        
//         document.getElementById('fridayMessage').classList.remove("hide");
//     }     
//     else {
//         document.getElementById('fridayMessage').classList.add("hide");
//     }
// }

// document.getElementById('weekday').textContent = weekday;
