windy = document.querySelector(".temperature");

function windChill(jsObject) {

    let tempF = parseInt(document.getElementById('temp').innerHTML);
    let speed = parseInt(document.getElementById('wind').innerHTML);
    let chill = calculateChill(tempF, speed);
    
    if ((tempF <= 50) && (speed >= 4.8)){ document.getElementById('output').innerHTML = chill + "\u00B0F"; }
    else { document.getElementById('output').innerHTML = "N/A"; }
}
function calculateChill(tempF, speed) {
    f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
    return f.toFixed(1); }
windChill();