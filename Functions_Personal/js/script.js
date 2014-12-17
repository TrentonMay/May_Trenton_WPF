//Trenton May, Scalable Data Infrastructures 16/12/14
//Function_Personal
//How many fish can you have in your tank
//Two inches of fish per gallon

function tankVol(length, width, height, fishInches){ //fishInches = average amount of inches you have per fish
    hmInches = length * width * height * 7.47 / 2;//Here we calculate how many inches of fish you can have
    console.log("You may have " + (hmInches / fishInches).toFixed(0) + " Fish");//This prints out how many fish you can place in the tank
}

tankVol(3, 5, 7, 10);
tankVol(2, 4, 3, 4);









