// Write a function that reverses the bits in an integer.
// For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.
// You can assume that the number is not negative.

function reverseBits(n) {
    let midresult = n.toString(2)
    let binary = midresult.split("").reverse().join("")
    let finalresult = parseInt(binary, 2)
    return finalresult
}
  
  
// or shorter:
function reverseBits(n) {
    const binaryReverse = n.toString(2).split('').reverse().join('')
    return parseInt(binaryReverse, 2)
}