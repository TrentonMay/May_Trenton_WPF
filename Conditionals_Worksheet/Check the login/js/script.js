//Check the login

var userName = prompt("Please enter your username");
var passWord = prompt("Please enter your password");
var realUsername = "bob" ;
var realPassword = "bob" ;

if(userName == realUsername && passWord == realPassword){
    alert("Welcome " + userName);
}else if(userName != realUsername){
    alert("User not found. Try again");
}else if(passWord != realPassword){
    alert("Password does not match our records");
}




