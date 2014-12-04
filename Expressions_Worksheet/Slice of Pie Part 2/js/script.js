// Slice of Pie Part 2

var slices = 8;
var people = 20;
var pizzas = 6;

var totalSlices = slices * pizzas;
var spp = Math.floor(totalSlices / people);

var leftOvers = totalSlices - (spp * people);

console.log("Sparky got " + Math.floor(leftOvers) + " pieces of pizza");

