// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

function getMiddle(test){
    let numberdown = (Math.floor(test.length/2))
    let numberup = (Math.ceil(test.length/2))
    if(test.length % 2 == 0) {
     var resultarr = test.split("")
     console.log(resultarr)
     var result = resultarr.splice(numberdown-1,2).join("")
     return result
    } else if(test.length % 2 !== 0) {    
     var resultarrtwo = test.split("")
     var resulttwo = resultarrtwo.splice(numberup-1,1).join("")
     return resulttwo
    }
}

// or shorter: 

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}