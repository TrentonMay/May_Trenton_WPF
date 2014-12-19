//Circumference

var radius = 5; //Here where I am entering the radius of the circle
var circumference = calcCirc(radius * 2);

console.log("The circumference of your circle is " + circumference.toFixed(2));

function calcCirc(diameter){
    return diameter * 3.14;
}



