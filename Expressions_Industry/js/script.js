//Expressions Industry
//How many scan points on a foot

alert ("We are calculating the amount of scan points you will scan");//Tells user what we are doing
var width = prompt ("Enter the width of the building");//Tells user to enter width of the building
var length = prompt ('Enter the length of the building');
var perimeter = width * 2 + length * 2;
var freq = prompt ("Enter how often there is a scan points \n in feet");
var totalScan = perimeter / freq;

alert ("The number of scan point you will have is " + Math.floor(totalScan));




