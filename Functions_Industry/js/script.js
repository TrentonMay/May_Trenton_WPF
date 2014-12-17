//Trenton May, Scalable Data Infrastructures 16/12/14
//Function_Industry
//Calculating how many buns Arby's needs to order for their sandwiches


var checkBuns = function(buns){  //set's up anonymous function
    if(buns >= 100){  //Set's the standard for what is a good amount of buns
        return false;
    }else{
        return true;
    }

}
checkBuns(50) ? console.log("You need more buns") : console.log("You don't need more buns");//Runs code to see what it's like if there were < 100 buns
checkBuns(200) ? console.log("You need more buns") : console.log("You don't need more buns");//Runs code to see what it's like if there were > 100 buns



