/**
 * Created by Thundaigus436 on 5/21/2015.
 */

alert ("Java Works")





var array1 = [10, 6, 7, 3, 12, 5, 1];
var array2 = [25, 100, 4, 22, 16, 105, 2, 7];
var array3 = [2, 3, 4, 1, 10, 27, 32, 51, 6, 100, 8, 42];
var returnedArray;
var numArrays= [array1,array2,array3]


function bubbleSort(argArray) {

 //local variables
   var num1, num2, holder;

    //loop through the array
    for(var newElement in argArray){

    for (var element in argArray) {

        element = parseInt(element)

        //assign array element to variables
        num1 = argArray[element];

        num2 = argArray[element + 1];


        //compare array elements to variables
        if (num1 > num2) {

            holder = num1;
            argArray[element] = num2;
            argArray[element + 1] = num1;
        }
    }
  }
    return argArray;
}

//Main Code
for (var each in numArrays){


returnedArray =bubbleSort(numArrays [each])

console.log ("Array number " + each + " sorted is " + returnedArray)
}