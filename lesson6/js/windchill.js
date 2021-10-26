function doInputOutput() {
    var tempF = parseInt(document.getElementById('temp').value);
    var speed = parseInt(document.getElementById('wind').value);
    var chill = windChill(tempF, speed);
    if ((tempF <= 50) && (speed >= 4.8)){
        document.getElementById('output').innerHTML = chill + "\u00B0F";
    }
    else {
        document.getElementById('output').innerHTML = "N/A";
    }
    
}
function windChill(tempF, speed) {
    f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
    return f.toFixed(1);
}