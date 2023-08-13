// vectorType

class Vec {
   x: number;
   y: number;

 constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
 }

 getCoord() {
    return `(${this.x}, ${this.y})`
 }

 plus(x: number, y: number) {
    this.x += x;
    this.y += y;

 }

 minus(x: number, y: number) {
    this.x -= x;
    this.y -= y;
 }

 get length() {
    return Math.sqrt((this.x - 0)**2 + (this.y - 0)**2)
 }
}

const point = new Vec()

console.log(point.getCoord())
point.plus(3, 3)
console.log(point.getCoord())
console.log(`Distance between coord and origin is ${point.length}`)
