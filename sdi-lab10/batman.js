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
    var powerBall = [];

    if (ladyLuck === "FLL") {
        for (var i = 0; i < 6; i++) {

            flLotto.push((Math.random() * 53) + 1);
        }

        powerBall = flLotto;
        return powerBall;
    }
    else if (ladyLuck === "PBN") {

        for (var i = 0; i < 5; i++) {

            pbNumbers.push(Math.round((Math.random() * 59) + 1))
        }
        powerBall = pbNumbers;
        return powerBall
    }
}

console.log("The winning numbers are " + flLotto)