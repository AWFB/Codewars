function reverseWords(str) {
  return str
    .split(' ')
    .map(function (word) {
      return word.split('').reverse().join('')
    })
    .join(' ')
}

console.log(reverseWords("this is a string"));
// siht si a gnirts

// The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. 
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first. 
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), 
// separated by commas or a specified separator string. 