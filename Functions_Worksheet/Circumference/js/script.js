//Circumference

var radius = 5; //Here where I am entering the radius of the circle
var circumference = calcCirc(radius * 2);//This is where I'm calling on the function to get the circumference

console.log("The circumference of your circle is " + circumference.toFixed(2));//This prints out the result to the console. I also limited the decimals

function calcCirc(diameter){ //This names the function and sets up the formula inside
    return diameter * 3.14;
}



