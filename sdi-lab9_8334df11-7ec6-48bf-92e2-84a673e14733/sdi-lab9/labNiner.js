//alert("JavaScript works!");
//ProbAnthony Black
//Anthony Black
//SDI 1505
// 5/23/2015

var toChange = (8.906489);
var toChange2 = (7.915643);
var result;
var decimalPlace;
function findDecimal (decimalFinder){

       var result = decimalFinder.toFixed(2);

    return result
}

decimalPlace=findDecimal(toChange);
console.log ("The decimal place is " + decimalPlace);


//problem 2

function mathMethod(argPrompt) {

    if (isNaN(argPrompt)) {
        argPrompt = prompt("Enter a real number:")
    } else {
        var buildingsDestroyed = parseInt(argPrompt);
    }
    console.log(buildingsDestroyed);
}
var myPrompt = prompt("How many buildings did Hulk Smash?" , "CHOAS")
mathMethod(myPrompt);

//problem 3

alert ("I work")
var myDate1 = "8/06/1990";
var newDate2 = "3/09/1971";
var date;
function goodDates(myDate,newDate) {


    var newDate2 = new Date(myDate);
    var newDate3 = new Date (newDate);
    var newVar = 1;
    var prompt1 = prompt("Press 1 for Hours, or Press 2 for Days");

    dateDiff = newDate2 - newDate3;
   if(prompt1==2){(dateDiff = Math.abs(dateDiff /1000/60/60/24))
   }
    else if(prompt1==1) {dateDiff = Math.abs(dateDiff /1000/60/60)
   }
    console.log(dateDiff);
    return dateDiff
}
date = goodDates(myDate1,newDate2)

console.log(date)