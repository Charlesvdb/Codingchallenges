// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    let lowercase = s.toLowerCase()
    let arr = []
    for(var i=1; i<lowercase.length+1;i++){
      let subresult = lowercase[i-1].repeat(i)
      let firstletter = subresult.substring(0,1).toUpperCase()
      let finalsubresult = firstletter + subresult.substring(1)
      arr.push(finalsubresult)
      console.log(arr)
    }
    return arr.join("-")
  }