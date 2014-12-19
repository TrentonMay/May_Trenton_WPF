//Circumference

var radius = 4;
var diameter = radius * 2;
var circumference = calcCirc();

console.log("The circumference of your circle is " + circumference.toFixed(2));

function calcCirc(diameter){
    return diameter * 3.14;
}

console.log("The circumference of your circle is " + calcCirc(3));

