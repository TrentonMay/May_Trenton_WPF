//Expressions Personal
//How much gas you will need

alert("We are calculating the price of the amount of gas you will need");//We are telling the user what we are doing
var ppg = prompt("Enter the price per gallon");//Tells user to enter the  price per gallon
var mpg = prompt("Enter the miles per gallon your vehicle gets");//Tells user to enter their mpg
var miles = prompt("Enter the amount of miles you will travel");//Tells user to enter how many miles they wish to travel
var gallons = miles / mpg;//This will calculate how many gallons you will need
var total = gallons * ppg;

alert("You will use " + gallons + " gallons \n Which will cost you $" + total);
