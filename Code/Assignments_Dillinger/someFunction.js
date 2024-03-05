//const assert = require("assert");

// write a function with two parameter, an array and a value
// - the function returns the first element in this array,
//   if the given value is not in the array
// - it returns the next element where the value is found,
// - it returns -1 if there is no next element,
//   the found value is the last element in the array
function arrayShift(getArray, value) {
    let array = getArray();
    //assert.notEqual( array.length, 0 );
    let index = array.findIndex( (element) => element === value );
    if (index < 0) return array[0];
    if (index == array.length - 1) return -1;
    return array[ index + 1 ];
}

/*
data = [ 7, 8, 2, 5 ];

assert.equal( arrayShift(data, 3), 7 );
assert.equal( arrayShift(data, 8), 3 );
assert.equal( arrayShift(data, 5), -1 );

console.log("Finished.");
*/
module.exports = arrayShift;
