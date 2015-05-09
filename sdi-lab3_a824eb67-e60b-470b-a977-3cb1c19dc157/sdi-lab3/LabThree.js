alert("JavaScript works!");
//variables
var mar = "Mario";
var hot = "Link";
var underdog = "Luigi";
var hc = "Heart Container";
var msh = "1 UP Mushroom";
var pp = "Princess Peach";
var maxNum = 3;
var maxNum2= 5;
var where = "Hyrule";
var ttruth = "Yes";
var alie = "No";
console.log (mar + " is trapped in the land of Hyrule");

console.log ("He went in search of "+ pp + " and was caught in an pipe line that didnt take him to the next level");
console.log ("As he made his way out of the pipline that he was " +
    "caught in, the words of his brother, " + underdog + " rang in his ears");
console.log ("There are places that we aren't meant to go " + mar + " " +
    "and sometimes to get back to where we came from \n sometimes we have to break a few rules");
where = prompt (mar + " is trapped in the land of where?");
if(where === where ){
    console.log ("Great job!!! You get a " + msh)
}else{
    console.log ("I'm sorry, looks like your princess is in ANOTHER castle")
}
pp= prompt ("You are looking for the princess right?");
if(pp=== ttruth ) {
    console.log ("Good I thought you were a selfish adventurer")
}else if (pp=== alie){
    console.log("Some people just want to watch the world burn")
}
console.log ("On his Journey, " + mar + " came across a \n" + hc + " heart piece that his friend " + hot + " normally uses");
console.log ("Since" + mar + " was smart, and was a Doctor for a moment, he started working on quick math to balance out");
console.log ("exactly how many " + hc + " were equal to a " + msh);
console.log ("After some quick math he quickly discovered that \n" +
    "" + maxNum2 + " " + hc + " is equal to " + maxNum +", "+ msh );
console.log ("shortly after being attacked by a tree (yes a tree) \n he found himself in a market place where they sold the" + hc +
    " that he needed, but since the merchant was also a doctor, " +
    "he could only sell " + mar + " the proper amount that his body would allow.");
console.log("He could only sell "+ mar + "a " + hc + " in a pack of " + maxNum2 + "or in halfs");
console.log(mar + " reached into his pocket and pulled out his wallet and asked for " + maxNum2 + hc);
maxNum2= parseInt(prompt ("How many " + hc + " did " + mar + "ask for?"));
if(maxNum2 === maxNum2) {
    console.log ("Im so glad that you can follow this ridiculous story")
} else if(maxNum===maxNum2){
    console.log("No no, i think your mixing things up, you might not be as smart as i thought")
}else {
    console.log ("Come on the answer is 5")
}
maxNum=parseInt(prompt ("How many "+ msh + " is equal to 5 " + hc));
if (maxNum===maxNum) {
    console.log ("Your princess is still in another castle but good job on the simple story");
    prompt= ("How many " + msh + "will it take to get 15 " + hc )
}