
// This would work but fails on TTTT as it only checks for the first instance
function DNAtoRNA1(dna) {
  return dna.replace('T', 'U')
}


//Instead we need to use regex 
function DNAtoRNA2(dna) {
    return dna.replace(/T/g, 'U')
}
console.log(DNAtoRNA2("TTTT"));


// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. 
