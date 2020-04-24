// The new "Avengers" movie has just been released!
// There are a lot of people at the cinema box office standing in a huge line.
// Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.


function tickets(peopleInLine){
    let bills = []
    for(var i=0; i<peopleInLine.length; i++) {
      if(peopleInLine[i] == 25) {
        bills.push(25)
      } else if (peopleInLine[i] == 50) {
        if(bills.indexOf(25) == -1) {
          return "NO"
        } else if (bills.indexOf(25) !== -1) {
            bills.splice(bills.indexOf(25),1)
            bills.push(50)
        }
      } else if (peopleInLine[i] == 100) {
        let counttwentyfive = 0
        let countfifty = 0
        for(var j=0;j<peopleInLine.length; j++) {
          if(peopleInLine[j] == 25) {
            counttwentyfive++
          }
          if(peopleInLine[j] == 50) {
            countfifty++
          }
        }
        if(counttwentyfive < 1) {
          console.log("test")
          return "NO"
        } else if (counttwentyfive < 3 && countfifty >= 1 ) {
          bills.splice(bills.indexOf(25),1).splice(bills.indexOf(50),1)
          bills.push(100)
          console.log("ole ole")
        } else if (counttwentyfive >= 3){
          console.log("Charles")
          bills.splice(bills.indexOf(25),1).splice(bills.indexOf(25),1).splice(bills.indexOf(25),1)
          bills.push(100)
        }
      }
    }
    return "YES"
  }
  
// tickets([25, 25, 50])  
// tickets([25, 50])
// tickets([25, 25, 50, 50, 100])
// tickets([25, 50, 25, 50, 25])
// tickets([50,50,50,100,100,100,100])
// tickets([25,25,100])