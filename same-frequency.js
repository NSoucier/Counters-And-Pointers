// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    const int1Freq = freq(int1);
    const int2Freq = freq(int2);

    for (let num in int1Freq) {
        if ( int1Freq[num] !== int2Freq[num]) return false
    }

    return true
}

function freq(int) {
    const obj = {};
    let str = int.toString();

    for (let num of str) {
        obj[num] = ( obj[num] +1) || 1;
    }

    return obj
}