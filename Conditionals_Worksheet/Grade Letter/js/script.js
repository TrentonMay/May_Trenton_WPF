//Grade letter calculator

var grade = prompt("What is your grade (in percent)");

if(grade >= 95){
    alert("You have a " + grade + "%" +" which gives you a A+");
}else if(grade >= 90 && grade <= 94){
    alert("You have a " + grade + "%" +" which gives you a A");
}else if(grade >= 85 && grade <= 89){
    alert("You have a " + grade + "%" +" which gives you a B+");
}else if(grade >= 80 && grade <= 84){
    alert("You have a " + grade + "%" +" which gives you a B");
}else if(grade >= 76 && grade <= 79){
    alert("You have a " + grade + "%" +" which gives you a C+");
}else if(grade >= 73 && grade <= 75){
    alert("You have a " + grade + "%" +" which gives you a C");
}else if(grade >= 70 && grade <= 72){
    alert("You have a " + grade + "%" +" which gives you a D");
}else if(grade <= 69){
    alert("You have a " + grade + "%" +" which gives you a F");
}
