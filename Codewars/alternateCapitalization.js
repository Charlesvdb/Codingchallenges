function capitalize(s){
    let arr = s.toLowerCase().split("")
    let evenarr = []
    let oddarr = []
    let endresultarr = []
  
      for(var i=0; i<arr.length;i++){
        if(i % 2 == 0){
        evenarr.push(arr[i].toUpperCase())
        } else if (i % 2 !== 0){
        evenarr.push(arr[i].toLowerCase())
        }
      }    
      
      for(var j=0; j<arr.length;j++){
        if(j % 2 == 0){
        oddarr.push(arr[j].toLowerCase())
        } else if (j % 2 !== 0){
        oddarr.push(arr[j].toUpperCase())
        }
      }
  
      let result = evenarr.join("")
      let result2 = oddarr.join("")
      endresultarr.push(result)
      endresultarr.push(result2)
      return endresultarr
    } 


// or shorter:

function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
};