// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
    let hashtag = '#';
    
    for (i = 0; i < str.length; i++) {
      if ((i === 0 || /\s/.test(str[i-1])) && !/\s/.test(str[i])) {
        hashtag += str[i].toUpperCase();
      } else if (!/\s/.test(str[i-1]) && !/\s/.test(str[i])) {
        hashtag += str[i];
      }
    }
    
    if (hashtag === '#' || hashtag.length > 140 || str === '') {
      return false;
    } else {
      return hashtag;
    }
  }
  

//Other
  function generateHashtag(str){
    let wordarr = str.toLowerCase().split(" ")
    let resultarr = []
    for(var i=0;i<wordarr.length;i++){
      let firstletter = wordarr[i][0].toUpperCase()
      let allothers = wordarr[i].split("").splice(1).join("")
      let wordcombo = firstletter.concat(allothers)
      resultarr.push(wordcombo)
    }
    let hash = "#"
    return hash.concat(resultarr.join(""))
}