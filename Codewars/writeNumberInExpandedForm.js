// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num){
    var digits = num.toString()
    var output = []
  
    for(var i=0; i<digits.length; i++){
      if(digits[i]>0){
        var zeros = ''
        for(var z=digits.length-i-1; z>0; z--){
          zeros+='0'
          console.log(zeros)
        }
        output.push(Number(digits[i]+zeros))
      }
    }
    return output.join(' + ')
}
  
  // or shorter:
  const expandedForm = n => n.toString()
                              .split("")
                              .reverse()
                              .map( (a, i) => a * Math.pow(10, i))
                              .filter(a => a > 0)
                              .reverse()
                              .join(" + ");
  