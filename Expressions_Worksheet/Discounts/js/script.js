//Discounts

var op = 30;
var discount = 25;
var description = "Milk";
var salesTax = 5;

var dc = discount / 100;//discount percentage
var st = salesTax / 100;//sales tax

var dp = op - (op * dc);//discount price
var total = dp + (dp * st);

console.log("Your " + description + " was originally " + "$" + op + " , but after a " + discount +"%" + " discount, it is now " + "$" + dp + " without tax, and " + "$" + total + " with tax");


