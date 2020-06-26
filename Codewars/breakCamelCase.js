// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"

function solution(string) {
    let resultarr = []
    for(var i=0; i<string.length;i++){
      if(string[i] !== string[i].toUpperCase()){
        resultarr.push(string[i])
      } else if(string[i] === string[i].toUpperCase()) {
        resultarr.push(" ")
        resultarr.push(string[i])
      }
    }
    return resultarr.join("")
}
  
  
function solution(string) {
return(string.replace(/([A-Z])/g, ' $1'));
}