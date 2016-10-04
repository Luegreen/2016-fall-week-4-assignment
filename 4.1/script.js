/**
 * Created by siqi on 9/24/16.
 */

//Given this empty array, perform the following tasks
var arr1 = [];

//Task 1: populate the empty array with 10 random, *rounded*, numbers between 0 and 100
//Hint: within a 'for' loop, use 'Math.random() * 100' and 'Math.round()'

var numOfSimulations = 10;
/*
step 1: construct a for loop, iterating over it for x number of times each time, run Math.random()
each run of Math.random() will generate a number between 0 and 1 
*/

for(var i=0; i<numOfSimulations; i++) {

    var result = Math.round(Math.random() * 100);
    arr1.push(result);
    
console.log("this is arr1: "+ arr1);}


//Task 2: remove the first element in the array and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

console.log(arr1.shift());

//Task 3: remove the last element in the array, and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
console.log(arr1.pop());

//Question: how many elements does arr1 have at this moment?
console.log("There are now " + arr1.length + " items in arr1.");

//Task 4: given a new empty array arr2, populate it with the exact same values as in arr1
//...but in reverse order
//Hint: use the '.unshift()' method of array. Can you look up the API for it?
var arr2 = arr1.reverse();
console.log("This is arr2 "+ arr2);


//Task 5 OPTIONAL: filter out all the odd values in arr1, keeping the even values
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

var arr3 = arr1.filter(function(el){
    return el % 2 === 0;
});


console.log("This is arr3 " + arr3);
