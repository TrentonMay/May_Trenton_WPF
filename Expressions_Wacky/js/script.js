//Trenton May, 12/04/2014, Expressions
//Expressions Wacky
//We are calculating the amount of water needed in a pool

alert ("We are calculating the amount of water need in your square pool \n Please enter in feet");
//Telling user what we are doing

var length = prompt ("Please enter the length of the pool in feet");
//Tells user to enter length of pool

var width = prompt ("Please enter the width of the pool in feet");
//Tells user to enter width of the pool

var depth = prompt ("Please enter the depth of the pool in feet");
//Tells user to enter the depth of the pool

var volume = length * width * depth;
//Calculates the volume

var totalGal = volume * 7.47;
//Calculates the amount of gallons you need to fill the pool

alert ("You will need " + totalGal.toFixed(2) + " gallons to fill this pool ");
//Tells user how many gallons they need to fill their pool

