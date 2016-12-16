/*
Given two numbers, a, b, as inputs, return true if a > b,
return false if a < b, return 0 otherwise.

Bonus 1: If a or b is undefined or not a number, then return -1.
Hint: Chekout typeof() operator at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

*/

/**
Examples:

var result = isBigger(3,4);
console.log(result) // false

var result = isBigger(13,4);
console.log(result) // true

var result = isBigger(4.00001,4);
console.log(result) // true

var result = isBigger(4,4);
console.log(result) // 0

var result = isBigger("potato",4);
console.log(result) // -1

var result = isBigger("4",4);
console.log(result) // -1

var result = isBigger(3);
console.log(result) // -1

var result = isBigger();
console.log(result) // -1

**/

//Input: two numbers
//Output: evaluating the relationship between the two numbers, true if a is bigger, false if a is smaller, 0 if a and b are equal, and -1 for anything else

function isBigger(a, b) {
	//check if a and b are numbers
	//if they arent numbers, return -1
	//if a>b, return turn
	//if a<b, return false
	//else, return 0
if(typeof a !== 'number' || typeof b !== 'number'){
  //if they arent numbers, return -1
  return -1;
} else{
	//if they are, check if a > b
	if(a > b) {
		return true;
	}
	else if(a < b){
		return false;
	}
	else{
		return 0;
    }
  }
}

isBigger(2,5);