const isEven = (x: number): boolean => {
    if (x == 0) {
        return true
    } else if (x == 1) {
        return false
    } else {
        return isEven(x - 2)
    }
}

console.log(isEven(-1))