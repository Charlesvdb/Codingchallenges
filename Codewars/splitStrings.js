// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(string){
    let resultarr = []
    for(var i=0; i<string.length;i+=2){
      let subres = string.slice(i,i+2)
      console.log(subres)
      console.log(subres.length)
      if(subres.length === 1){
        console.log("dowegohere")
        let newsubres = subres.concat("_")
        console.log(newsubres)
        resultarr.push(newsubres)
    } else if(subres.length === 2)
      resultarr.push(subres)
    }
    return resultarr
  }
  
// or shorter:
function solution(str) {
    return (str.length % 2 ? str + '_' : str).match(/../g);
}