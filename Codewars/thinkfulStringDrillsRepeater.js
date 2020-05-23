// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

// Example:
// Repeater.repeat("a", 5)
// should return

// "aaaaa"

function repeater(string, n){
    let resultstring = []
    for(var i=n;i>0;i--){
      resultstring.push(string)
    }
    return resultstring.join("")
  }
  
  // or shorter:
  
  const repeater = (string, n) => {
    return string.repeat(n);
  }
  
  