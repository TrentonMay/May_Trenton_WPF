//Movie Ticket

var movieTime = prompt("What time is your movie");
var age = prompt("How old are you");
var disCount = 7;
var regular = 12;

if(movieTime >= 3 && movieTime <= 5 || age >= 55 || age <= 10){
    alert("The ticket price is " + disCount);
}else{
    alert("The ticket price is " + regular);
}

