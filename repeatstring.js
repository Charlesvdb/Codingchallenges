// Write a function called repeatString which repeats the given String src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(count,string) {
    let repeatedstring = ""
    while(count>0) {
      repeatedstring += string
      count--
    }
    return repeatedstring
  }

////////////////////////////////////////////////////////

function repeatStr(count,string) {
    return string.repeat(count)
}