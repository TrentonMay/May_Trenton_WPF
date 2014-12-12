//Tire Pressure 1

var tirePressure =[];
tirePressure [0] = prompt("Enter the pressure of your front right tire");
tirePressure [1] = prompt("Enter the pressure of your front left tire");
tirePressure [2] = prompt("Enter the pressure of your back right tire");
tirePressure [3] = prompt("Enter the pressure of your back left tire");


if((tirePressure[0] == tirePressure[1]) && (tirePressure[2] == tirePressure[3])){
    alert("Your tires are just fine monsiuer");
}else{
    alert("You might want to get those tires checked");
}
