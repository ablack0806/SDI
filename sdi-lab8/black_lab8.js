////alert("JavaScript works!");
//Anthony Black
//SDI 1505
//Lab 8
var email1 = "";

function checkEmail(findMe){

    var checkMe = findMe.indexOf("@");
    var checkMe2 = findMe.lastIndexOf("@");
    var atSymbol;

    if (checkMe >= 0 && checkMe2=== checkMe) {
    atSymbol = true;
}
    else {
    atSymbol = false;
    }

    if (atSymbol===false || findMe.indexOf(".") <0 || findMe.indexOf(" ") >=0 ){
        valid = "  not valid";
    }else{
        valid = " for great success.";
    }



    return valid;
}


email1 = prompt("Enter a Valid Email Address " , "Primary Email");
console.log("The Email is " + checkEmail(email1));



var string = "Tony,Vergil,Michael,Batman?";
var string2 = ",";
var string3 = ",";
var returnString;

function sentenceSplicer(fixMe,seperateMe,seperateMeAnew){

    var newString;
    var newVariable = "";

    newString = fixMe.split(seperateMe)
    for(var i = 0; i< newString.length; i++){
        if(i===(newString.length -1)){
            newVariable = newVariable + newString[i];
        }else{
            newVariable = newVariable + newString[i] + seperateMeAnew;
        }
    }

    return newVariable;
}

returnString = sentenceSplicer(string,string2,string3)
console.log ("Captain the list of potential Superheroes include: " + returnString + "but we arent too sure about Tony")
