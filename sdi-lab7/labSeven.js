//alert("JavaScript works!");

// Anthony Black
//SDI 1501
//5/19/15

var num1 = [10, 6, 7, 3, 12, 5];
var num2 = [25, 100, 4, 22, 16, 105, 2, 7];
var num3 = [2, 3, 4, 1, 10, 27, 32, 51, 6, 100, 8, 42];

//function

function bubbleSort(num1)
{
    var swapped;
    do{
        swapped=false;
        for(var i=0; i<num1.length-1; i++){
            if(num1[i]>num1[i+1]){
                var temp=num1[i];
                num1[i]=num1[i+1]
                num1[i+1]=temp;
                swapped=true;
            }
        }
    } while(swapped);
}

bubbleSort(num1);
console.log(num1);