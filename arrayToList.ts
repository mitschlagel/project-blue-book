const flipper = (array: any[]): any[] => {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let num = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = num
    }
    return array
}

const arrayToList = (array: number[]) => {
    let list = null;

    let reveresed = flipper(array);

    for (let element of reveresed) {
        list = {value: element, rest: list};
    }
    return list;
}

const listToArray = (list: any) => {
    let array = []
    for (let node = list; list != null; list = list.rest) {
        array.push(list.value)
    }
    return array
}

let list = arrayToList([1, 2, 3])
let array = listToArray(list)
console.log(list)
console.log(array)

