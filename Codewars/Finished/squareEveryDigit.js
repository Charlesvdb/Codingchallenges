// Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer


function squareDigits(num){
    let stringer = num.toString()
    let subresult
    let arr = []
    for(var i=0;i<stringer.length;i++){
      subresult = Math.pow(stringer[i],2)
      arr.push(Number(subresult))
    }
    return parseInt(arr.join(""))
}

// or shorter:

function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join('')); 
  }