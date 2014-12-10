//Industrial conditional
//This script will tell you if you can drink something

alert("We will help you decide if you can drink your beverage legally");
var age = prompt("How old are you?");
var isAlcoholic = prompt("Is the drink alcoholic");
var legalAge = 21;

if (age == "" || isAlcoholic == "") {
    alert("You did not enter the required information. Please refresh the page.");
} else {
    if (isAlcoholic == "yes" && age >= legalAge){
            alert("Drink up!");
    }else if(isAlcoholic == "yes" && age < legalAge){
        alert("Cannot drink beverage");
    }else {
        alert("Drink up!");
    }
}
