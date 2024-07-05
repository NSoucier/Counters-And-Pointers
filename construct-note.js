// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    const msgFreq = freq(msg);
    const lettersFreq = freq(letters);

    for (let char in msgFreq) {
        if ( !(msgFreq[char] <= lettersFreq[char]) ) return false
    }

    return true    
}

function freq(str) {
    const obj = {};
    for (let char of str) {
        obj[char] = (obj[char] +1) || 1
    }
    return obj
}
