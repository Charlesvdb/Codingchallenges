



function highAndLow(numbers){
    let numberarr = numbers.split(" ")
    let realnumberarr = numberarr.map(element => parseInt(element))
    console.log(realnumberarr)
    let sorted = realnumberarr.sort(function(a, b){return a-b})
    console.log(sorted)
    let highestnr = sorted[sorted.length-1]
    let lowestnr = sorted[0]
    return highestnr + " " + lowestnr 
}


// or shorter:

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }