//Code Your DNA!

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2nd array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
//Input-string of missing pairing element
//Output-the pairs of arrays inside one parent array
function pairElement(str) {
  var parent = [];
  //create the parent array
  //seperate the string into an array
  //figure out which partner to add depending on the letter
  //conditional statemant to figure out the partner
  //push that partner letter
  var dna = {
    T: "A",
    A: "T",
    G: "C",
    C: "G",
  };
  var newStr = str.split("");
  for (var i = 0; i < newStr.length; i++){
    parent.push(newStr[i],dna[newStr[i]])
  }
                return parent;
}

console.log(pairElement("GCG"));
//TEST CASES
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]