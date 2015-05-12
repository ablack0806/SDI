//  NAME:  Anthony Black
//  DATE:  5/12/2015
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

var p;
var q;
var r;

p = confirm("First value:  Click OK for true or Cancel for false.");
q = confirm("Second value:  Click OK for true or Cancel for false.");
r = confirm("Third value: Click OK for true or Cancel for false");
if (p || (q || r)) {
    console.log("With " + p + " and " + q + " and " + r + ", the outcome is TRUE.");
} else {
    console.log("With " + p + " and " + q + r + ", the outcome is FALSE.");
};
