//Industrial conditional
//This script will tell you if you can drink something

var age = prompt("How old are you?");
var isAlcoholic = prompt("Is the drink alcoholic");
var legalAge = 21;

if (age == "" || isAlcoholic == ""){
    alert("You did not enter the required information. Please refresh the page.");
}else{
    if (isAlcoholic == "yes"){
        if (age >= legalAge) {
            alert("Drink up!");
        }else{
            alert("Can't touch this");
        }

        }else{
        alert("Drink up!");
    }

}
