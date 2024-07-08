// add whatever parameters you deem necessary
function countPairs(array, target) {
    let count = 0;
    let index1 = 0;
    let index2 = 1;

    while (array.length > 0) {
        if ( array[index2] === undefined ) {
            array.shift();
            index2 = 1;
        }
        console.log('checking:', array, 'at', array[index1], array[index2])
        let sum = array[index1] + array[index2];
        if ( sum === target) {
            console.log('equality!', array[index1], array[index2])
            array.splice(index2,1);
            array.splice(index1,1);
            count++;
            index1 = 0;
            index2 = 1;
        } else {
            index2++;
        }

    }
    
    return count
}
