// example of map use
//JavaScript Functional Programming — map, filter and reduce


//The map() method creates a new array with the results of calling a provided function on every element in the calling array.

const arr = [2,5,4,1,3];
arr1 = arr.map(val => val*10);
console.log(arr1);

// Filter:- The filter() method creates a new array with all elements that pass the test implemented by the provided function.

//without using filter
var f1 = arr => {
 var res = [];
 arr.forEach((value)=>{
 if(value.length > 4){
 res.push(value);
 }
 })
 return res;
}
console.log(f1(["dfdfefeferew", "aaaaaaaaaaaawwww", "sde"])); 

//with used of filter
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const longWords = words.filter(word => word.length > 6);
// longWords is ["exuberant", "destruction", "present"]

//Reduce()
//The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
//Description
//reduce() executes the callback function once for each element present in the array, excluding holes in the array, receiving four arguments:

//accumulator
//currentValue
//currentIndex
//array

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15



//reduce example 2:-
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
});

callback	accumulator	currentValue	currentIndex	array	return value
first call	0	           1	             1	    [0, 1, 2, 3, 4]	  1
second call	1	           2	             2	    [0, 1, 2, 3, 4]	  3
third call	3	           3	             3	    [0, 1, 2, 3, 4]	  6
fourth call	6	           4	             4	    [0, 1, 2, 3, 4]	  10



//Sum of values in an object array

var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
},initialValue)

console.log(sum) // logs 6
