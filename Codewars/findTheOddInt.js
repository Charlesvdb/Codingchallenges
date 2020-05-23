// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(arr) {
    var count = 0;
    for(var i=0; i<arr.length; i++){
      for(var j=0; j<arr.length; j++){
        if(arr[i] === arr[j]) count++;
      } if(count % 2 !== 0) return arr[i]
    } return count;
}