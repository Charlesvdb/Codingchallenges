// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// *NOTE: Vowels in this context refers to English Language Vowels - a e i o u y *

// NOTE: this is indexed from [1..n] (not zero indexed!)

function vowelIndices(word) {
    let oldarr = word.toLowerCase().split("")
    let newarr = word.toLowerCase().match(/[aeiouy]/g)
  
    let finalarr = []
  
    for (var i = 0; i < oldarr.length; i++) {
      for (var j = 0; j < newarr.length; j++) {
        if (newarr[j] === oldarr[i]) {
          finalarr.push(i + 1)
          break
        }
      }
    }
    return finalarr
}