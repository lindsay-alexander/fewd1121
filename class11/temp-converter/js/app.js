// When user enters Fahrenheit value, subtract 32 from that number, then divide that by 1.8.
// If solution is less than 32, make background snow.

// When user enters Celsius value, multiply that number by 1.8, then add 32
// If solution is greater than 24, make background the sun.


// // grab all interactive elements
var c = document.getElementById('c');
var f = document.getElementById('f');


// // store values 
var myC;
var myF;


// // function action
function convert(degree) {
    var x;
    if (degree == "C") {
        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = (x);
    } else {
        x = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = (x);
    }
}