// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:
// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
    let namer = name.toLowerCase()
    let finalresult = []
    for(var i=0; i<1;i++){
      finalresult.push(namer[i].toUpperCase())
    }
    for(var i=1;i<namer.length;i++){
      finalresult.push(namer[i])
    }
    let lastresult = finalresult.join("")
    return "Hello " + lastresult+"!"
}


//or shorter:

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

var greet = function(name) {
return "Hello " + name.capitalize() + "!";
};