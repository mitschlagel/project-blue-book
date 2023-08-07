"use strict";
const reverseArray = (array) => {
    let result = [];
    for (let i of array) {
        result.unshift(i);
    }
    return result;
};
const reverseArrayInPlace = (array) => {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let num = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = num;
    }
    return array;
};
console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArrayInPlace([1, 2, 3, 4]));
