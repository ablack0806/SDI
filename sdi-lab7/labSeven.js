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
        }return num1
    } while(swapped);
}

bubbleSort(num1);
console.log(num1);

function bubbleSort(num2)
{
 var swapped;
    do{
        swapped=false;
        for(var i=0; i<num2.length-1; i++){
            if(num2[i]>num2[i+1]){
                var temp=num2[i];
                num2[i]=num2[i+1]
                num2[i+1]=temp;
                swapped=true;
            }
        }return num2
    }while(swapped);
}

bubbleSort(num2)
console.log(num2)



function bubbleSort(num3)
{
    var swapped;
    do{
        swapped=false;
        for(var i=0; i<num3.length-1; i++){
            if(num3[i]>num3[i+1]){
                var temp=num3[i];
                num3[i]=num3[i+1]
                num3[i+1]=temp;
                swapped=true;
            }
        }return num3
    }while(swapped);
}

bubbleSort(num3);
console.log(num3);