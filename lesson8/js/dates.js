document.querySelector("#year").textContent = new Date().getFullYear();
function currentDate() {
    let today = new Date();
    let options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById("current").innerHTML = today.toLocaleDateString('en-GB', options);  
}
currentDate();
