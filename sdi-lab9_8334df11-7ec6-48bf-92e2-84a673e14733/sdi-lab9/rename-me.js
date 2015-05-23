//alert("JavaScript works!");

//var toChange = (8.906489);
//var toChange2 = (7.915643);
//var result;
//var decimalPlace;
//function findDecimal (decimalFinder){
//
//       var result = decimalFinder.toFixed(2);
//
//    return result
//}
//
//decimalPlace=findDecimal(toChange);
//console.log ("The decimal place is " + decimalPlace);


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