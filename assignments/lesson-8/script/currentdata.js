function initDate() {
    var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday");
    var monName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var now = new Date();
    var dtString = dayName[now.getDay()] + ", " + now.getDate() + " " + monName[now.getMonth()] + " " + fourdigits(now.getYear());
    document.getElementById("dtField").innerHTML = dtString;
}

function fourdigits(number) {
    return (number < 1000) ? number + 1900 : number;
}