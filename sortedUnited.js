//Sorted Union
//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

//In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

//The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

//Here are some helpful links:

//Array.reduce()  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


//Input: two or more arrays
//Output: an array of numbers in order, reduced to not include the duplicate numbers

function uniteUnique(arr) {
  //create a new array
  //create a variable to hold our arguments array
  //loop through the length of the arguments
  //loop through the individule elements
  //compare the values for repeating duplicates
  //compare the values for repeating numbers, use indexof to look for reapeating numbers, if found dont push.
  //push the numbers to a new array that match the requirements into that new array
var newArray = [];

for (var i = 0; i < arguments.length; i++){
  var numbers = arguments[i];
   for (var j = 0; j < numbers.length; j++) {
     if (newArray.indexOf(numbers[j]) === -1) {
       newArray.push(numbers[j])
     }
   }
  }
  return newArray;
}


//TEST CASES
 var result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
 console.log(result)
  //should return [1, 3, 2, 5, 4].
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].