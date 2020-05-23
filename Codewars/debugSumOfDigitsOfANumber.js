// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. 
// Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 15


function getSumOfDigits(integer) {
    let arrint = integer.toString().split("")
    console.log(arrint)
    let sum = 0
    for(var i=0;i<arrint.length;i++){
      sum += Number(arrint[i])
    }
    return sum
}

// or shorter:

function getSumOfDigits(integer) {
    return (integer+'').split('').reduce((sum, d) => sum + (+d || 0), 0);
  }