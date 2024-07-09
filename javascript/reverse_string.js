function reverseString(str) {

  const array=[]
  for(let i = str.length - 1; i>=0; i--){
    array.push(str[i])
  }
  return array.join('')

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*
  1. create new empty
  2. count length of string
  3. reverse the orginal array
  4. store and save revesed in new array
  5. return new array
*/