//Last Chance for gas

var gasEff = prompt("How many miles per gallon does your \n vehicle get?");
var gasPer = prompt("How much gas (in percentage) do you \n have left?");
var gasStorage = prompt("How much gas can your car hold (in gallons)");
var realPer = gasPer * .01;
var realGas = gasStorage * realPer;
var milesCango = realGas * gasEff;

if(milesCango > 200){
    alert("You don't need to stop for gas");

}else{
    alert("You only have " + realGas + " gallons, which will take you " + milesCango + " miles. \n You need to stop for gas");
}
