"use strict";
// groups
class Group {
    constructor() {
        this.group = [];
    }
    add(element) {
        this.group.push(element);
    }
    delete(element) {
        let index = this.group.indexOf(element);
        if (index > -1) {
            this.group.splice(index, 1);
        }
        else {
            return `${element} not in group`;
        }
    }
    has(element) {
        return this.group.includes(element);
    }
    static from(iterable) {
        let newGroup = new Group();
        newGroup.group = Array.from(iterable);
        return newGroup;
    }
}
let group = new Group();
group.add("one");
group.add("two");
console.log(group);
console.log(Group.from([1, 2, 3]));
console.log(group.has("chicken"));
