// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let word = '';
    for(let char of str){
        word = char + word
        debugger;
    }

    return word
}

reverse('abcd')

module.exports = reverse;

// function reverse(str) {
//     debugger;
//     return str.split('').reduce((reversed, char) => char + reversed, '')
// }    

    // let arr = str.split('')
    // arr.reverse()
    // return arr.join('')

    // return str.split('').reverse().join('')

    // return word


    // let word = []
    // let rev = ''
    // for(let char of str){
    //     word = char + word
    // }

    // for(let i = 0;i < str.length; i++){
    //     word = str[i] + word;
    // }