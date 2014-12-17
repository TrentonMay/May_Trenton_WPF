//Functions Industry
//Calculating how many buns Arby's needs to order for their sandwiches


var checkBuns = function(buns){
    if(buns >= 100){
        return false;
    }else{
        return true;
    }

}
checkBuns(50) ? console.log("You need more buns") : console.log("You don't need more buns");



