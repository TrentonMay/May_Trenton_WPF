//Industrial conditional
//This script will tell you if you need to work overtime

var workers = prompt("How many workers do you have?");
var partsNeeded = prompt("How many parts do you need?");
var workday = 8; //how long in hours an average work day is
var ppm = 1; //how many parts per minute a single employee can do
var ppd = workers * ppm * workday; //how many parts all the workers can make an a workday

//now we will make sure they answered the questions with our first if statement
if(workers === "" || partsNeeded === ""){