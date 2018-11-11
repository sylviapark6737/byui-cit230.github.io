function doInputOutput() {
        
    var temp = parseFloat(document.getElementById("temp").value);
    var windspeed = parseFloat(document.getElementById("speed").value);
    var chill = windChill(temp, windspeed);
    
    document.getElementById("output").innerHTML = chill;    
}

function windChill(tempF, speed) {
    var f = 35.74 + 0.6215*tempF +(0.4275*tempF - 35.75)*Math.pow(speed,0.16);
    return f;
}

