alert("JavaScript works!");
//Anthony Black
//SDI 1505
// 5/14/2015

var num1 = parseFloat(prompt("Whats your first number:"));
var num2 = parseFloat(prompt("Whats your second number"));
var operation = prompt ("Which operation today?");
var returnCatch;
var sOO;

//functions
function addition (add1, add2){

   //addition

    sOO =(add1 + add2);
    return sOO;
}


if(operation === "+"){
    returnCatch = addition(num1, num2);
    console.log("The number is " + returnCatch + ".");
}

function subtract (sub1, sub2){

    //subtraction

    sOO =(sub1 - sub2);
    return sOO;
}

if(operation === "-"){
    returnCatch = subtract(num1, num2);
    console.log("The number is " + returnCatch + "")
}else if(operation === "-"){
    returnCatch = subtract(num1, num2);
    console.log("The number is " + returnCatch + ".")
}

function multiplication (num1, num2){
if(operation === "*"){
    returnCatch = multiplication(num1 * num2);

    //multiplication

    sOO = (multi1 * multi2);
    return sOO;

}else if(operation === "*"){
    returnCatch = multiply (num1, num2);
    console.log("The number is " + returnCatch + ".")
}

    function division(div1, div2) {

        //divide

        sOO = (div1 / div2);
        return sOO
    }