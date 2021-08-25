// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let maxChar;
    let obj = {}

    str.trim().split('').forEach(key => {
        if(obj[key] === undefined){
            obj[key] = 1;
        }else{
            obj[key] = obj[key] + 1
        }
    });
    
    let entries = Object.entries(obj)
    let max = [entries[0]];

    for(i = 0; i < (entries.length - 1); i++){
        if(entries[i+1][1] > max[0][1]){
            max = [entries[i+1]]
        }else if(entries[i+1][1] === max[0][1]){
            max.push(entries[i+1])
        }else{}


    }

    if(max.length === 1){
        maxChar = max[0][0]
    }else{
        maxChar = 'Two or more char have highest no.'
    }

    return maxChar;

}

module.exports = maxChar;
