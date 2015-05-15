/**
 * Created by Thundaigus436 on 5/9/2015.
 /*Black L. Anthony
SDI 1505
*/

var Solid_Snake = "Solid Snake"
var Big_Boss = "Big Boss"
var Otacon = "Hal Emerich"
var enemy = "Metal Gear"

console.log (Solid_Snake +" is a main character in the video game Metal Gear Solid");
console.log (Big_Boss + " is also a main character in the game as well\n As the main antagonist");
console.log (enemy + " is more than just the title of the game\n It is also the reoccuring enemy that spans\n through out the entire series.");
Otacon= prompt ( Solid_Snake + " has a partner, what is his name?");
if(Otacon === "Otacon") {
    console.log ("Congradulations, you were actually paying attention");
} else {
    //if the conditional is false
    console.log("Intruder Alert!");

}