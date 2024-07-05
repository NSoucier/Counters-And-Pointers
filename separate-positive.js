// add whatever parameters you deem necessary
function separatePositive(array) {
    let left = 0;
    let right = array.length -1;
    let current = array[left];
    let temp

    while (left < right) {
        if (current > 0) {
            left ++;
            current = array[left];
        } else {
            temp = array[right];
            array[right] = current;
            right --;
            array[left] = temp;
            current = array[left];

        }
    }

    return array
}
