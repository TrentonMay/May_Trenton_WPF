//Function for Personal
//How many fish can you have in your tank
//Two inches of fish per gallon

function tankVol(length, width, height, fishInches){
    hmInches = length * width * height * 7.47 / 2;//Here we calculate how many inches of fish you can have
    console.log(hmInches / fishInches);
}

tankVol(3, 5, 7, 10);









