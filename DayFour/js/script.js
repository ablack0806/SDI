/**
 * Created by Thundaigus436 on 5/12/2015.
 */
//alert ("alert");

//variables
    // one first name
    // one for last name

//var firstName = "Tony";
//var lastName = "Black";
//var yourFirstName;
//var yourLastName;
//
//
////prompts
////ask user for first name
////ask user for last name
//yourFirstName= prompt("Enter a name:", "Type your name here");
//yourLastName= prompt ("Enter your last name:", "Type your last name here");
//
//if(yourFirstName=== firstName || yourLastName=== lastName){
//    console.log ("You are correct, sir");
//} else{
//    console.log("Intruder alert")
alert

//never do this!
//var myname = "John Doe";
//var mynumber = 10
//
//while(mynumber === 15 ){
//    console.log("My number is " + mynumber );
//    mynumber = mynumber+ 1;
//}
//console.log("The loop is done");
//
////for loop
//for(var i = 0; i <= 10; i++){
//    console.log("i is equal to " + i);
//}

//99 bottles of pop on the wall

for(var pop = 99; pop >= 1; pop --){
    if(pop ===1){
        console.log(pop + " bottle of pop on the wall");
        console.log(pop + "bottle of pop")
    }else {
        console.log(pop +  "bottles of pop on the wall")
        console.log(pop + "bottles of pop")
    }
    //console.log(pop + " bottles of pop on the wall");
    //console.log(pop + " bottles of pop");
    console.log("Take one down pass it around,");
    if(pop >2){

        console.log((pop-1)+ " bottles of pop on the wall");
    }else if(pop == 1){
        console.log(" No more bottles of beer on the wall");
    }else{
        console.log((pop - 1) + "bottle of pop on the wall");
    }
    console.log(" ");
}