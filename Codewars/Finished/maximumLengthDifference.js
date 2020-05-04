// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// #Example:

// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13


function mxdiflg(a1, a2) {
    let longest = 0
    let shortest = 100000
    for(var i=0;i<a2.length;i++){
      if(a2[i].length>longest){
        longest = a2[i].length
      }
    }
    for(var j=0;j<a1.length;j++){
      if(a1[j].length<shortest){
        shortest = a1[j].length
      }
    }
    return longest-shortest
}

