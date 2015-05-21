//alert("JavaScript works!");

var email1 = "";

function checkEmail(findMe){

    if ((findMe.indexOf("@") <0 || findMe.indexOf(".") <0) || findMe.indexOf(" ") >=0 ){
        valid = "Email is not valid";
    }else{
        valid = "Email for great success.";
    }


}


email1 = prompt("Enter a Valid Email Address " , "Primary Email");
console.log("The Email is " + checkEmail(email1));

