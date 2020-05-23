// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// For example, encode("hello") would return "h2ll4" There is no need to worry about uppercase vowels in this kata.
// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
// For example, decode("h3 th2r2") would return "hi there"
// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string) {
    let resultarr = []
    for(var i=0;i<string.length;i++){
      switch(string[i]){
        case "a":
          resultarr.push(1)
          break
        case "e":
          resultarr.push(2)
          break
        case "i":
          resultarr.push(3)
          break
        case "o":
          resultarr.push(4)
          break
        case "u":
          resultarr.push(5)
          break
        default:
          resultarr.push(string[i])
          break                          
      }
    }
        return resultarr.join("")
  }
  
  
  function decode(string) {
    let resultarr = []
    for(var i=0;i<string.length;i++){
      switch(string[i]){
        case "1":
          resultarr.push("a")
          break
        case "2":
          resultarr.push("e")
          break
        case "3":
          resultarr.push("i")
          break
        case "4":
          resultarr.push("o")
          break
        case "5":
          resultarr.push("u")
          break
        default:
          resultarr.push(string[i])
          break                          
      }
    }
    return resultarr.join("")
  }

//   or shorter:

function encode(string){
    return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
  }
  
  //turn numbers back into vowels
  function decode(string){
    return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
  }