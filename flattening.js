"use strict";
// Flattening
const flattener = (bigArr) => {
    return bigArr.reduce((arr1, arr2) => arr1.concat(arr2));
};
console.log(flattener([[1, 2, 3], [4, 5, 6]]));
