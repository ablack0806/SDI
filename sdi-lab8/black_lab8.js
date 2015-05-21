//alert("JavaScript works!");

var email1 = "";

function checkEmail(findMe){

    if ((findMe.indexOf("@") <0 || email1+ "@" >1 || findMe.indexOf(".") <0) || findMe.indexOf(" ") >=0 ){
        valid = "  not valid";
    }else{
        valid = " for great success.";
    }



    return valid;
}


email1 = prompt("Enter a Valid Email Address " , "Primary Email");
console.log("The Email is " + checkEmail(email1));

