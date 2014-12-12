//Celsius Fahrenheit

var temp = prompt("What temperature is it?");
var realTemp = prompt("Is that Celsius or Fahrenheit");
var cTof = temp * 9 / 5 + 32;
var fToc = (temp - 32) * 5 / 9;

if(realTemp === "Celsius"){
    alert("Your temperature is " + temp + " Celsius or " + cTof.toFixed(2) + " Fahrenheit");
}else{
    alert("Your temperature is " + temp + " Fahrenheit or " + fToc.toFixed(2) + " Celsius");
}
