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
    '':  ' ',
};

function decode(expr) {
    var arr = expr.match(/.{1,10}/g);
    var newArr = [];

    arr.forEach(function(item, i){
        var newItem = "";
        for (let i=0; i<item.length; i=i+2) {
            var a = item.charAt(i) + item.charAt(i+1);
            if (a == '00') newItem += '';
            if (a == '10') newItem += '.';
            if (a == '11') newItem += '-';
            if (a == '**') newItem += '';
        }
        newArr.push(newItem);
    });
    //console.log(newArr);
        
    expr = "";

    newArr.forEach(function(item, i){
        for (let key in MORSE_TABLE) {
            if (item == key) expr += MORSE_TABLE[key];
            //else if (item == "*****") expr += " ";
        }
    });
    //console.log(expr);
    return expr;
}

module.exports = {
    decode
}