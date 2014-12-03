//Expressions Industry
//How many scan points on a foot patrol

alert ("We are calculating the amount of scan points you will scan");
var width = prompt ("Enter the width of the building");
var length = prompt ('Enter the length of the building');
var perimeter = width * 2 + length * 2;
var freq = prompt ("Enter how often there is a scan point \n in feet");
var totalScan = perimeter / freq;

alert ("The number of scan point you will have is " + Math.floor(totalScan));




