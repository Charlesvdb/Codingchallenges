// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
    var string = "";
    var lowerCaseWord = word.toLowerCase();
    for (var i = 0; i < lowerCaseWord.length; i++) {
      if (lowerCaseWord.indexOf(lowerCaseWord[i]) === lowerCaseWord.lastIndexOf(lowerCaseWord[i])) {
        string += "(";
      } else {
        string += ")";
      }
    }
    return string;
}