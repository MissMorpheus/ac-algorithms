//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

//Here are some helpful links:

//Array.push() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

//Array.slice() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

//TEST CASES
//chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

//Input:an array and a number that tells us how to split an array
//output: a two-dimensional array

 function chunkArrayInGroups(arr, size) {
  // crete a variable to hold the child arrays
  //loop through the array in order to slice and push the elements into new arrays
  
  var parentArray = [];
  for (var i = 0; i < arr.length; i += size){
    var child = arr.slice(i, i + size);
    parentArray.push(child)
  }
console.log(parentArray);
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


