// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
    let startarr = s.split("")
    let resultarr = []
    for(var i=0;i<s.length;i++){
      if(s[i] !== "#"){
        resultarr.push(s[i])
      } else if(s[i] === "#"){
        resultarr.pop()
      }
    }
    return resultarr.join("")
}
  
// or shorter:
function clean_string(s) {
    const result = []
    for (const c of s) {
      if (c === "#") {
        result.pop()
      } else {
        result.push(c)
      }
    }
    return result.join("")
}