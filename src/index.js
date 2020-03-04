const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = []

    for (let i=0; i < expr.length/10; i++ ){
        let letter = []
        let crt
        if (i === 0){
            crt = expr.substring(i, 10)
        }else crt = expr.substring(i*10, i*10+10)

        crt = crt.substring(crt.indexOf('1'))

        if(crt !== '**********'){
            for (let i=0; i < crt.length/2; i++){
                if (i === 0){
                    letter.push(crt.substring(i, 2)==='10'? '.' : '-')
                }else letter.push(crt.substring(i*2, i*2+2)==='10'? '.' : '-')
            }
        }else {
            letter.push(' ')
        }
        arr.push(MORSE_TABLE[letter.join('')] ? MORSE_TABLE[letter.join('')] : ' ')
    }

    return arr.join('')

}

module.exports = {
    decode
}