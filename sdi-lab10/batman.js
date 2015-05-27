//alert("JavaScript works!");
//Anthony Black
//SDI 1505
//5/26/2015
//global variables

var yourNumber;
var returnedNumber;

//Function
function gimmeTheNumbers(ladyLuck) {

    //local Variables
    var flLotto = [];
    var pbNumbers = [];
    var powerBall;

    if (ladyLuck === "FLL") {
        for (var i = 0; i < 6; i++) {

            flLotto.push((Math.round(Math.random * 53) + 1));
        }

        powerBall = flLotto;
        return powerBall;
    }
    else if (ladyLuck === "PBN") {

        for (var i = 0; i < 4; i++) {

            pbNumbers.push(Math.round((Math.random() * 59) + 1))
        }   pbNumbers.push(Math.round((Math.random() * 35)+ 1))
        powerBall = pbNumbers;
        return powerBall
    }
}

yourNumber = prompt("How do you want to lose your money?" , " FLL or PBN");
returnedNumber = gimmeTheNumbers(yourNumber);
if(yourNumber === "FLL") {
    console.log("The winning numbers for FLL are " + returnedNumber);
}else if(yourNumber === "PBN") {
    console.log("The winning numbers for PBN are " + returnedNumber)
}