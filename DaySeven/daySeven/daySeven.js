/**
 * Created by Thundaigus436 on 5/19/2015.
 */
//alert("java works")


//Anthony Black
//SDI 1505
//Review


//global variables
var numberArray=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var returnedArray=[];
var userPrompt;

var userPrompt = prompt("Enter 'odd' to return odd numbers or 'even' to return even numbers.");

while(userPrompt != "odd" && userPrompt != "even")

    userPrompt = prompt("We HAD A DEAL DUDE! Enter 'odd' or 'even'");

//function
function evenArray(argArray, oddOrEven){

    //local Array
    var newArray=[];
    var modNum;
    var zeroOrOne;
    var newArgArray = new Array(argArray)
    if(oddOrEven ==="odd"){
        zeroOrOne =1;
    } else {
        zeroOrOne = 0
    }

    for(var i = 0; i< numberArray.length; i++){

        modNum = numberArray[i] %2;
        if(modNum===zeroOrOne){
            newArray.push(numberArray[i]);
        }
    }
    argArray.pop();
    //console.log("argArray: " + argArray)
    //console.log("newArgArray: " + newArgArray)
    return newArray
}


//main code
returnedArray = evenArray(numberArray, userPrompt);
console.log ("The " +userPrompt + " numbers in the array is " + returnedArray)


console.log("number array" + numberArray)
























//lab six review

//function

//function authorFunction(){
//
//    //local arrays
//    var authors =[ "Charles Dickens ", " William Shakesphere ", "Mark Twain ", "Hunter S. Thompson "];
//    var titles =["oliver twist", "Hamlet", "Tom Sawyer", "Fear and Loathing"];
//
//    //for loop to go through the array items
//    //output each element
//    for(var i=0; i<authors.length; i++){
//
//        console.log(authors[i] + "wrote " + titles[i] + ".");
//    }
//    //use an array method to alter the arrays
//    authors.push("Dorothy Allison ");
//    titles.push("Bastard out of Carolina")
//
//    //do final console.log
//    console.log("I added " + authors[i] + " who wrote " + titles[i] + ".")
//}
//
////main code
//authorFunction()