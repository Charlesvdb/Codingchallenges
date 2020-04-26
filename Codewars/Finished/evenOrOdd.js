// Create a function (or write a script in Shell) that takes an integer as an argument
// and returns "Even" for even numbers or "Odd" for odd number

function even_or_odd(number) {
    if(number % 2 == 0){
      return "Even"
    } else if (number % 2 !== 0){
      return "Odd"
    }
}

// or shorter:

function even_or_odd(number) {
    return number % 2 == 0?"Even":"Odd"
   }