// promise practice

let p = Promise.resolve("p")
console.log(p)

let w = new Promise((resolve) => {
    if(typeof resolve === "number") {
        return resolve + 1
    } else {
        return "oops"
    }
})

console.log(w.then(x=>{console.log(x)}))

