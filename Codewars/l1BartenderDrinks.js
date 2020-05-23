// Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
//  "Programmer"	 "Hipster Craft Beer"
//  "Bike Gang Member"	"Moonshine" 
//  "Politician"	"Your tax dollars" 
//  "Rapper"	"Cristal" 
//  *anything else*	"Beer" 
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer."

// Make sure you cover the cases where certain words do not show up with correct capitalization.
// For example, getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".

function getDrinkByProfession(param){
    var text
    var res = param.toLowerCase().split(" ");
    var endresult = []
    for(var i=0;i<res.length;i++){
      endresult.push(res[i].charAt(0).toUpperCase() + res[i].substring(1))
    }
    var endresultmerge = endresult.join(" ")
    switch(endresultmerge){
      case "Jabroni":
      text = "Patron Tequila";
      break;
      case "School Counselor":
      text = "Anything with Alcohol";
      break;
      case "Programmer":
      text = "Hipster Craft Beer";
      break;
      case "Bike Gang Member":
      text = "Moonshine";
      break;
      case "Politician":
      text = "Your tax dollars";
      break;
      case "Rapper":
      text = "Cristal";
      break;
      default:
      text = "Beer";
    }
    return text
  }