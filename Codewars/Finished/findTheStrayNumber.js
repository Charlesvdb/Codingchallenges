// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


function stray(numbers) {
    let odd = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
    if(numbers[0] !== numbers[1]){
      return numbers[0]
    } else if (numbers[i] !== numbers[0]) {
    odd = numbers[i];
    }
    }
      return odd;
}


// or shorter:

function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
}