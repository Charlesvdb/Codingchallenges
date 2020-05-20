// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// // returns 'www.codewars.com?page=1' 
// removeUrlAnchor('www.codewars.com?page=1') 

function removeUrlAnchor(url){
    if(url.includes("#")){
      let substringarr = url.substring(0,url.indexOf("#"))
      return substringarr  
    } else {
      return url
    }
}

//or shorter:

function removeUrlAnchor(url){
    return url.split('#')[0];
}