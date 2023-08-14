"use strict";
function deepEqual(x, y) {
    if (typeof x == "object" && typeof y == "object") {
        if (x == null || y == null) {
            return false;
        }
        let xProps = Object.keys(x);
        let yProps = Object.keys(y);
        console.log(xProps);
        console.log(yProps);
        return xProps.every((current, index) => current === yProps[index]);
    }
}
console.log(deepEqual({ thrr: 1, two: 2 }, { one: 1, two: 2 }));
