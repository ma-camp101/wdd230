document.querySelector("#year").textContent = new Date().getFullYear();
const today = new Date();
const options = { weekday: 'long', day: 'short', month: 'medium', year: 'numeric' };
document.querySelector("#current").textContent = new Date(today.toLocaleDateString('en-UK', options));