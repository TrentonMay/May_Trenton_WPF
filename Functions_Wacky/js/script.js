//Trenton May, Scalable Data Infrastructures 16/12/14
//Function_Wacky
//Can you drive in the snow, or do you need to drive cautiously
//Keep in mind I live in virginia so this is how bad our roads are with slight snow!

function canDrive(snow){ //Snow will be in inches
    if(snow == 0){
        console.log("You can drive!"); //If there is no snow you can drive
    }else if(snow > 0 && snow <=3){
        console.log("Please drive cautiously.");
    }else{
        console.log("It's too dangerous to drive!");
    }
}

canDrive(9);
canDrive(3);
canDrive(0);