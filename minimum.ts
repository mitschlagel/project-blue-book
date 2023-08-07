const min = (x: number, y: number) => {
    console.log(x - y > 0)
    return x - y > 0 ? y : x
}

console.log(min(15, 14));