// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps

// Notes:
// the returned string should only contain lowercase letters


// works only if more than 1 part

function kebabize(str) {
    let oldarr = str.split("")
    let arr = oldarr.filter(item=>isNaN(item))
    console.log(arr)
    let newarr = []
    for(var i=0; i<arr.length;i++){
      if(arr[i] === arr[i].toUpperCase()){
        newarr.push(" ")
        newarr.push(arr[i])
      } else if(arr[i] !== arr[i].toUpperCase()){
        newarr.push(arr[i])
      }
    }
    let stringresult = newarr.join("").toLowerCase()
    console.log(stringresult)
    let finalresult = stringresult.replace(/\s/g,"-")
    return finalresult
}
  
  // or shorter:
  
  function kebabize(str) {  
  return str.replace(/[0-9]/g, '').split(/(?=[A-Z])/).join('-').toLowerCase()  
  }
  
  