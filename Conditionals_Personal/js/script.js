//Trenton May, Scalable Data Infrastructures, 12/10/14
//Conditionals Personal
//Vaping. If you have a RDA then you will need more liquid because you are burning more liquid. If you have a  RBA you will burn less liquid

var mod = prompt ("Do you have a RDA or a RBA?");
var spendAbility = prompt ("How much money are you willing to spend?");
var rdaJuice = 30; //this is the amount of juice you will need for a RDA in mL
var rbaJuice = 10; //this is the amount of juice you will need for a RBA in mL
var rdaCost = 20; //this is the cost of the RDA juice
var rbaCost = 5;  //this is the cost of the RBA juice

if(mod === "" || spendAbility === ""){
    alert("You have not entered the required information. Please refresh");
}else{
    if(mod === "RDA"){
        if (spendAbility >= 20){
            alert("You can buy the juice needed for a RDA, which is, " + rdaJuice + "mL " + "and costs " + "$" + rdaCost);

        }else{
            alert("You cannot buy the juice needed for your RDA, which is, " + rdaJuice + "mL " + "and costs " + "$" + rdaCost);

        }
    }if(mod === "RBA"){
        if(spendAbility <= 5){
            alert ("You cannot buy the juice needed for your RBA, which is, " + rbaJuice + "mL " + "and costs " + "$" + rbaCost);

        }else {
            alert("You can buy the juice needed for a RBA, which is, " + rbaJuice + "mL " + "and costs " + "$" + rbaCost);
        }
    }
}

