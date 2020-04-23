// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case


function isIsogram(word) {
  var wordlowercase = word.toLowerCase()
  var letterarray = wordlowercase.split("")
  for(var i=0; i<letterarray.length; i++){
    for (var j=i+1; j<letterarray.length; j++) {
      if(letterarray[i] === letterarray[j]) {
      return false
      } else {
        continue
      }
    }
  }
  return true
}