//Average Shopping bill

var grocTotal = [30.25, 70.57, 24.89, 56, 43.67];
var total = grocTotal[0] + grocTotal[1] + grocTotal[2] + grocTotal[3] + grocTotal[4];
var average = total / 5;

console.log("You have spent a total of " + "$" + total + " on groceries over 5 weeks.\n That is an average of "+ "$" + average.toFixed(2) + " per week" );

