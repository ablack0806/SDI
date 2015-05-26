/**
 * Created by Thundaigus436 on 5/26/2015.
 */




////Create a function to find ifference between entered year and current year
//
//
////global variables
//var returnedNumber;
//
//
////functions
//function yearsBetween() {
//
////local variable
//    var yearEntered = parseInt(prompt("What year would you like to use?"));
//
//    var today = new Date();
//
//    today=today.getFullYear()
//
//    var difference = today-yearEntered
//
//    return difference
//
//}
//
////main code
//returnedNumber = yearsBetween();
//console.log("The difference in years is " + returnedNumber);


var numArray = [3,6,7,9,23,42,22,50]
var currentNumber = 21
var returnedNumber;

function findNumber(argArray,argNumber){

    var nextGreatest = 0;

    for(var i = o; i< argArray.length; i++){

        if (argNumber<argArray[i]) {

            console.log(argArray[i])
        }
    }
}

returnedNumber= findNumber(numArray, currentNumber)
console.log("The next greastest number is ")