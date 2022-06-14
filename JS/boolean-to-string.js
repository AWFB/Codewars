function boolToWord(bool) {
  if (bool) {
    return 'Yes'
  }
  return 'No'
}

function boolToWord2(bool) {
  return bool ? 'Yes' : 'No'
}

console.log( boolToWord(true) );