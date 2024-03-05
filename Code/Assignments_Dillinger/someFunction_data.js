function arrayShift(array, value) {
    let index = array.findIndex( (val) => val===value );
    return index < 0 ? array[0] : index < array.length - 1 ? array[index+1] : -1;
}

const ages = [3, 10, 18, 20];
console.log( arrayShift(ages, 5) );     // 3  because 5 is not part of the array
console.log( arrayShift(ages, 10) );    // 18 because it follows 10 in the array
console.log( arrayShift(ages, 20) );    // -1 because 20 has no successor
