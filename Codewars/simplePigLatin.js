// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    var wordstrs = str.split(" ")
    var result = [] 
    for(var i=0;i<wordstrs.length;i++){
      if(/[.,:!?]/.test(wordstrs[i])){
        result.push(wordstrs[i])
      } else {
        let firstletter = wordstrs[i][0]
        let middlepart = wordstrs[i].replace(firstletter,"")
        let subresult = middlepart+firstletter + "ay"
        result.push(subresult)
      }
    }
    let endresult = result.join(" ")
    return endresult
  }

//   or shorter:

