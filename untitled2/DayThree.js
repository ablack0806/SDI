/**
 * Created by Thundaigus436 on 5/9/2015.
 */

//alert("JavaScript works!")

    // initial variable
var myName= "Tony";
var newName= "";
var lastName= "Black";

//prompt for user input
newName = prompt ("Please enter your name:");

//Create our first conditional
if(newName === myName) {
    lastName = prompt("Please enter your last name:");
    //this is the code that runs if the conditional is true
    console.log("Greetings," + myName);

    if (lastName === "Black") {
    //if first name is correct and last name is correct
        console.log("Greetings," + myName + " "+ lastName);
    }
    else{
        console.log ("sorry, your from the wrong family")
    }

}
else{
    //if the first name is wrong
    console.log("Intruder Alert!");
}

var myNumber= 0;
var secondNumber= 5;
mynumber= parseInt(prompt("Enter the number 5");
if(myNumber== secondNumber) {
    console.log("They match exactly");
}else{
    console.log("The data types are wrong!");
}