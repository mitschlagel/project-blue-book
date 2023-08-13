"use strict";
// Using a loop
const everyWithLoop = (arr, fun) => {
    let flag = true;
    for (let i of arr) {
        if (!fun(i)) {
            flag = false;
        }
    }
    return flag;
};
console.log(everyWithLoop([1, 2, 3, 6], (n) => n < 5));
// Using some
const even = (e) => e % 2 === 0;
function everyWithSome(arr, test) {
    return arr.some(test);
}
console.log(everyWithSome([1, 2, 3, 6], (n) => n < 5));
