//Expressions Industry
//How many scan points on a Security guard foot patrol

alert ("We are calculating the amount of scan points you will scan");//Tells user what we are doing
var secure = []; // width, length, freq, perimeter, totalScan
secure [0] = prompt ("Enter the width of the building");//Tells user to enter width of the building
secure [1] = prompt ("Enter the length of the building");//Tells user to enter length of the building
secure [2] = prompt ("Enter how often there is a scan points \n in feet");//Tells user to enter how often there is a scan point

secure [3] = secure[0] * 2 + secure[1] * 2;//Calculates perimeter
secure [4] = secure[3] / secure[2];//Calculates how many scan points they have

alert ("The number of scan points you will have is " + Math.floor(secure[4]));
//Tells user the end result



