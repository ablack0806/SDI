/**
 * Created by Thundaigus436 on 5/26/2015.
 */


//alert

//global variables

var firstNumber = prompt ("Please enter a number");
var returnedNumber;
var numToFormat = parseFloat()

//Problem 3 variables
var dateOne = new Date("5/23/2015");
var dateTwo = new Date("5/23/2012");
var hOrD = "Hours";

// Problem function
function decFormat(argNumber, decPlaces){

    return argNumber.toFixed(decPlaces);
}



//Problem Two
function convertNumber(argNumber){

    while (isNan(argNumber)){

        argNumber=prompt ("No i said enter a number:")
    }

    return parseFloat(argNumber)
}


//Problem 3

function dateDiff(firstDate, secondDate,hoursOrDays){

    var difference = Math.abs(firstDate-secondDate);

    if(hoursOrDays==="hours"){
        difference = Math.round(difference/1000/60/60)

    }else{

        difference = Math.round(difference/1000/60/60/24);

    }
    return difference
}

//Main Code
//returnedNumber = convertNumber(firstNumber);
//console.log("The returned number is " , returnedNumber);


//problem 3
returnedNumber = dateDiff(dateOne, dateTwo, hOrD);
console.log("The difference in " + hOrD + " between "+ dateOne.toDateString()+ " and " + dateTwo.toDateString())