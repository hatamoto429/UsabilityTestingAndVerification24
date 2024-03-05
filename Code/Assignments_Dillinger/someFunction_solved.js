function arrayShift(array, value) {
    let index = array.findIndex( (val) => val===value );
    return index < 0 ? array[0] : index < array.length - 1 ? array[index+1] : -1;
}
