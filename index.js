function hasTargetSum(array, target) {
  // Write your algorithm here
  for (i=0; i<array.length; i++) {
    let num1 = array[i]
    for (j=i+1; j<array.length; j++){
      let num2 = array[j]
      let totals = num1 + num2
      if (totals === target){
        return true 
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  The way I have solved this challenge is not optimum.
  The time complexity would be O(n^2) because its iterating the two for loops.
  Also with space complexity, each iterated element is stored in a variable which takes a bigger memory
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
