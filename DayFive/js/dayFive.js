/**
 * Created by Thundaigus436 on 5/14/2015.
 */
//alert("java")
//
//var foo= 1;
//var bar= 2;
//var baz= 3;
//
//console.log(foo + " "+ bar + " "+ baz);
//Global Varibles
var globalName= "bob";
var returnedValueVariable;
var checkedName;

//functions

function nameFetcher(){
    var myName = prompt("Enter your name:","Tony");
    return myName
}

function nameChecker(nameArgument){
if(nameArgument === "Optimus"){
    var trueName;
   trueName = true;
}else{
    trueName = false;
    }
    return trueName;
}


//main code
returnedValueVariable = nameFetcher();

checkedName= nameChecker(returnedValueVariable);
console.log("nameChecker returned " + checkedName + ".");

if(checkedName){
    console.log("Greetings and welcome")
}else{
    console.log("Intruder alert");
}