// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:


function arrayDiff(a,b){
  let result = []
  for(var i=0; i<a.length;i++){
    for(var j=0;j<b.length;j++){
      if(a[i] !== b[j]){
        result.push(a[i])
      }
    }
  }
  return result
}


// or shorter:
const arrayDiff = (a, b) => a.filter(x => !b.includes(x))
