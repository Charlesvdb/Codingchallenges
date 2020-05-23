// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// DNAStrand ("ATTGC") // return "TAACG"
// DNAStrand ("GTAT") // return "CATA"


function DNAStrand(dna){
    let arr = dna.split("")
    console.log(arr)
    let newarr = []
    for(var i=0;i<arr.length;i++){
      if(arr[i] == "A"){
        newarr.push("T")
      } else if (arr[i] == "T"){
        newarr.push("A")
      } else if (arr[i] == "C"){
        newarr.push("G")
      } else if (arr[i] == "G"){
        newarr.push("C")
      }
    }
    console.log(newarr)
    return newarr.join("")
  }
  

//   or shorter:

function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }