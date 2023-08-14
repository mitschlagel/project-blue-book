// groups
class Group {
    group: any[]
    
    constructor() {
        this.group = []
    }

    add(element: any) {
        this.group.push(element)
    }

    delete(element: any) {
        let index = this.group.indexOf(element)
        if (index > -1) {
            this.group.splice(index, 1)
        } else {
            return `${element} not in group`
        }
    }

    has(element: any) {
        return this.group.includes(element)
    }

    static from(iterable: Iterable<any>) {
        let newGroup = new Group()
        newGroup.group = Array.from(iterable)
        return newGroup
    }

}

let group = new Group()
group.add("one")
group.add("two")
console.log(group)

console.log(Group.from([1, 2, 3]))
console.log(group.has("chicken"))