// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // solution #1
    // let numStr = n.toString()
    // let revNumStr = numStr.split('').reduce((rev, char) => char + rev, '')

    // if(revNumStr[revNumStr.length - 1] === '-'){
    //    revNumStr.replace('-','')
    //    revNumStr = '-' + revNumStr
    // }
    // return parseInt(revNumStr)

    // solution #2
    
    // if(Math.sign(n) === -1){
    //     let numStr = n.toString().replace('-','')
    //     let revNumStr = numStr.split('').reduce((str, char) => char + str, '')
    //     revNumStr = '-' + revNumStr
    //     return parseInt(revNumStr)
    // }else{

    //     let numStr = n.toString()
    //     let revNumStr = numStr.split('').reduce((str, char) => char + str, '')
    //     return parseInt(revNumStr)
    // }

    // solution #3

    const reversed = n.toString().split('').reduce((str, char) => char + str, '')

    return parseInt(reversed) * Math.sign(n);
}

reverseInt(-5)

module.exports = reverseInt;
