const range = (start: number, end: number, step: number = 1) => {
    let array: number[] = []
    while (start <= end) {
        array.push(start)
        start += step
    }
    
    
    return array
}

function sum(array: number[]) {
    return array.reduce((acc, num) => acc + num)
}

console.log(range(1, 10, 2))
console.log(sum(range(1, 10)))
