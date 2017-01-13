//Map the Stars!

//Return a new array that transforms the element's average altitude into their orbital periods.

//The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

//You can read about orbital periods on wikipedia. https://en.wikipedia.org/wiki/Orbital_period

//The values should be rounded to the nearest whole number. The body being orbited is Earth.

//The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

//Helpful Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
//input: array containing an object that has two key value pairs of name and average altitude.
//output:an array containing an object, has two key value pairs of name and orbital period.
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
   //create the constant variable
   var pi = 2 * Math.PI;
  
  var parentArray = [];
  //create a function to take in an object and calculate the orbital Period
  function starMapping(object){
  var distance = Math.pow(earthRadius + object.avgAlt, 3);
  var gravity = Math.sqrt(distance/GM);
  var orbitalPrd = Math.round(pi * gravity);
    //add key value pair to object
  object.orbitalPeriod = orbitalPrd;
    //delete the avgAlt key value pair
  delete object.avgAlt;
    return object;
  }
  //Loop through the array to call the function for each object
  for (var i = 0; i < arr.length; i++){
    parentArray.push(starMapping(arr[i]));
    
  }
  console.log(parentArray);
}

}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

//TEST CASES

//orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
//orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].