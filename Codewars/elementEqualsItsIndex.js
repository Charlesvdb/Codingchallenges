// Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index. Return -1 if there is no such index.

// Your algorithm should be very performant.

// [input] array of integers ( with 0-based nonnegative indexing )
// [output] integer

// Examples:
// input: [-8,0,2,5]
// output: 2 # since array[2] == 2

// input: [-1,0,3,6]
// output: -1 # since no index in array satisfies array[index] == index
// Random Tests Constraints:
// Array length: 200 000

// Amount of tests: 1 000
// Time limit: 150 ms


function indexEqualsValue(a) {
    var start = 0, end = a.length;
    var neg = -1;
    while(start < end){
      var i = Math.floor((start + end) / 2);
      if (a[i] > i){
        end = i;
      } else if(a[i] < i) {
        start = i+1;
      } else {
        neg = i;
        end = i;
      } 
    }
    return neg;
  }
  
  
  //out of time limit
  function indexEqualsValue(a,b) {
    for(var i=0; i<a.length;i++){
      if(i === a[i]){
        return i
      }
    }
    return -1;
  }