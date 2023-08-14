"use strict";
// vectorType
class Vec {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    getCoord() {
        return `(${this.x}, ${this.y})`;
    }
    plus(x, y) {
        this.x += x;
        this.y += y;
    }
    minus(x, y) {
        this.x -= x;
        this.y -= y;
    }
    get length() {
        return Math.sqrt((this.x - 0) ** 2 + (this.y - 0) ** 2);
    }
}
const point = new Vec();
console.log(point.getCoord());
point.plus(3, 3);
console.log(point.getCoord());
console.log(`Distance between coord and origin is ${point.length}`);
