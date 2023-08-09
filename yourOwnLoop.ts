// Your Own Loop

function loop(value: any, test: any, update: any, body: any) {
    for(let i = value; test(i); i = update(i)) {
        body(i)
    }
}


loop(0, (n: number) => n < 10, (n: number) => n + 1, console.log)