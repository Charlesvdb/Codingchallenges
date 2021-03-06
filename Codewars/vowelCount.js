// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    var res = str.match(/[aeiou]/gi)
    return res == null? 0:res.length
}


// or shorter:

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}