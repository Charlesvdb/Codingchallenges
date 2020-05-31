// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

function alphabetWar(fight){
    let resarr = fight.split("")
    console.log(resarr)
    countr = 0;
    countl = 0;
    for(var i=0;i<resarr.length;i++){
     switch(resarr[i]){
      case "m":
       countr += 4
       break
      case "q":
       countr += 3
       break
      case "d":
       countr += 2
       break
      case "z":
       countr += 1
       break
      case "w":
       countl += 4
       break
      case "p":
       countl += 3
       break
      case "b":
       countl += 2
       break
      case "s":
       countl += 1
       break
      default:
      countr += 0
      countl += 0
     }
     console.log(countr)
     console.log(countl)
     if(countr == countl){
       return "Let's fight again!"
     } else if(countr > countl){
       return "Right side wins!"
     } else if(countr < countl){
       return "Left side wins!"
     }
    }
  }
  
// or other:  
  
  function alphabetWar(fight) {
   let left = {'w': 4, 'p':3, 'b':2, 's':1};
   let right = {'m': 4, 'q':3, 'd':2, 'z':1}
   let leftScore = 0;
   let rightScore = 0;
    fight.split('').forEach(letter => {
    left.hasOwnProperty(letter) ? leftScore += left[letter] :  right.hasOwnProperty(letter)? rightScore += right[letter] : 0;
  
    });
      
     return leftScore === rightScore ? "Let's fight again!" : leftScore > rightScore ? "Left side wins!":"Right side wins!";  
  }
  
  
// or shorter:  
  
  function alphabetWar(fight) {
      let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
      let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
      return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
  }
  