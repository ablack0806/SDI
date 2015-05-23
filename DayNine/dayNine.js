///**
// * Created by Thundaigus436 on 5/23/2015.
// */
//
//
//var myEmail = "ablack0806@yahoo.com"
//var emailTrueOrFalse;
//
////Problem Functions
//// First function: check email address
//function checkEmail(argEmail){
//
//    var foodEmail=  false;
//    var atSymbol =  argEmail.indexOf("@");
//    var dotSymbol = argEmail.indexOf(".");
//    var noSpace =   argEmail.indexOf(" ");
//    var lastAt =    argEmail.lastIndexOf("@");
//
//
//    if(atSymbol === lastAt && atSymbol != -1){
//        goodEmail = true;
//    } else{
//        return false;
//    }
//
//    if(dotSymbol > -1&& dotSymbol>atSymbol){
//
//        goodEmail=true;
//    }else{
//
//        return false
//    }
//
//    if(noSpace == -1){
//
//        goodEmail=true
//    }else{
//        goodEmail= false
//    }
//    return goodEmail
//}
//
//
////Main Code
//emailTrueOrFalse = checkEmail(myEmail);
//console.log("It is "+emailTrueOrFalse + " that this email is valid")



//Date object
function goodDates(){

    var myDate = "5/23/2015";

    console.log(myDate)

    var newDate = new Date(myDate)

    console.log(newDate)




}


function mathMethod(argPrompt){

   while(isNaN(argPrompt)){
       argPrompt = prompt("Enter a real number:")
   }
       var newAge =parseInt(argPrompt)

    //console.log(newAge)
}

//main code
goodDates()

//var myPrompt = prompt("Enter your age" , "age")
//mathMethod(myPrompt);
