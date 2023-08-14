const countBs = (x: string) => {
    let bCount = 0
    x.split('').map(( x: string )=> {
        if (x == "B") {
            bCount++
        }
    })
    console.log(`There are ${bCount} capital B's in this string`)
}

countBs("Bill has many Bruisers")