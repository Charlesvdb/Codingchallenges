// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let arr = s.split(" ")
    console.log(arr)
    let longest = 100
    for(var i=0;i<arr.length;i++){
      if(arr[i].length < longest){
        longest = arr[i].length
      }
    }
    return longest
  }
  
  // or shorter:
  
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}