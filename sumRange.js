"use strict";
const range = (start, end, step = 1) => {
    let array = [];
    while (start <= end) {
        array.push(start);
        start += step;
    }
    return array;
};
function sum(array) {
    return array.reduce((acc, num) => acc + num);
}
console.log(range(1, 10, 2));
console.log(sum(range(1, 10)));
