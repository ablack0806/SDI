/**
 * Created by Thundaigus436 on 5/12/2015.
 */
//Anthony Black
//SDI 1505
// 5/12/2015
//Movie Ticket Price


var ticketPrice = 12;
var age = "";
var discountPrice = 7;
age = prompt("Enter your age please")
 if(age >=55 ||age <= 10){
     console.log ("Your discount has been applied, enjoy the movie")
     console.log("Your new ticket price is " + discountPrice+ " dollars")
 } else{
     console.log ("Your movie is price is " + ticketPrice + " thank you and enjoy your movie.")
 }