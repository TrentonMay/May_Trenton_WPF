//Expressions Wacky
//We are calculating the amount of water needed in a pool

alert ("We are calculating the amount of water need in your square pool \n Please enter in feet");
//Telling user what we are doing

var length = prompt ("Please enter the length of the pool in feet");
var width = prompt ("Please enter the width of the pool in feet");
var depth = prompt ("Please enter the depth of the pool in feet");
var volume = length * width * depth;
var totalGal = volume * 7.47;

alert ("You will need " + totalGal.toFixed(2) + " gallons to fill this pool ");

