// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let xs = 0
    let os = 0
    let arr = str.toLowerCase().split("")
    console.log(arr)
    for(var i=0; i<arr.length;i++){
      if(arr[i] == "o"){
        os += 1
      } else if (arr[i] == "x"){
        xs += 1
      }
    }
    if(xs == os){
      return true
    } else if (xs !== os){
      return false
    }
  }

//   or shorter:

function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}