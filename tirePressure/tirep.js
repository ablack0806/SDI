/**
 * Created by Thundaigus436 on 5/12/2015.
 */
//Anthony Black
//SDI 1505
//5/12/2015
//Tire pressure


var tireUp = "inflator"
var tireDown = "deflator"
var tp = ""
var tp2 = ""
tp = prompt("Please enter the tire preassure of your front two tires")

if(tp==55){
    console.log("Your tires are at the most optimal pressure, \n no action required")
} else{
    console.log("Your tires are not at the optimal pressure, \n please inflate/deflate your tires to a more suitable pressure")
}
if(tp>55 || tp<55){
    console.log("Your tires are at a dangerously low/high level")
    console.log("Please use " + tireUp + " or " + tireDown + " to adjust your tire pressure levels.")
}
tp2 = prompt("Please enter the tire pressure of your two back tires")

if(tp2 == 64) {
    console.log("Your tires are at the most optimal pressure, \n no action required")
}else{
    console.log("Your tires are not at the optimal pressure, \n please inflate/deflate your tires to a more suitable pressure")
}

if(tp2>64||tp2<64){
    console.log("Your tires are at a dangerously low/high level")
    console.log("Please use " + tireUp + " or " + tireDown + " to adjust your tire pressure levels.")
}