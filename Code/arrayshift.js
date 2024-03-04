function arrayShift(array, value) {
    let index = array.findIndex((element) => element === value);
    if (index < 0) return array[0];
    if (index == array.length -1) return -1;
    return array[index + 1];
};

/* Examples
const testarray = [1, 2, 3, 4, 5];
const testval = 8;
console.log(arrayShift(testarray, testval));
*/

module.exports = arrayShift;