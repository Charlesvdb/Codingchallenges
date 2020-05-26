// There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

// You are given money in nominal value of n with 1<=n<=1500.

// Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.

// Good Luck!!!

function solve(n) {
    let counter = 0
    while(n-500>=0){
      n -= 500
      counter++
    }
    while(n-200>=0){
      n -= 200
      counter++
    }
    while(n-100>=0){
      n -= 100
      counter++
    }
    while(n-50>=0){
      n -= 50
      counter++
    }
    while(n-20>=0){
      n -= 20
      counter++
    }
    while(n-10>=0){
      n -= 10
      counter++
    }
    console.log(counter)
    console.log(n)
    if(n==0){
      return counter
    } else {
      return -1
    }
  }