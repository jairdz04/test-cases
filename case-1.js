const buildRunLength = ({ string = "" }) => {
    const letters = string.split("");
    if(!letters.length) throw new Error('Empty string');

    let baseLetter = letters[0];

    let result = '';
    let count = 0;
    let index = 0;

    for(const letter of letters){
        index++;
        const sameLetter = letter === baseLetter;

        if(sameLetter && count < 9){
            count++;
        }

        if(sameLetter && count >= 9) {
            result = `${result}${count}${baseLetter}`
            count = 0;
        }
        
        if(!sameLetter){
            result = `${result}${count}${baseLetter}`
            count = 1;
            baseLetter = letter;
        }

        if(index === letters.length){
            result = `${result}${count}${baseLetter}`
            break;
        }
    }

    return result;
}; 


module.exports = buildRunLength;