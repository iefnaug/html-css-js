/*function* gen() {
    let i = 0
    while (true) {
        yield i++;
        if (i === 10) {
            return
        }
    }
}
let g = gen();
for (let i = 0; i < 20; i++) {
    let v = g.next().value
    console.log(v)
}*/


// function* gen() {
//     let ask1 = yield "2 + 2 = ?";
//
//     console.log(ask1); // 4
//
//     let ask2 = yield "3 * 3 = ?"
//
//     console.log(ask2); // 9
// }
//
// let generator = gen();
//
// console.log( generator.next().value ); // "2 + 2 = ?"
// console.log( generator.next(4).value ); // "3 * 3 = ?"
// console.log( generator.next(9).done ); // true


/**
 * 异步迭代
 */

let range = {
    from: 1,
    to: 5,

    [Symbol.asyncIterator]() { // (1)
        return {
            current: this.from,
            last: this.to,

            async next() { // (2)
                // console.log(this.last, this.current)
                // 注意：我们可以在 async next 内部使用 "await"
                await new Promise(resolve => setTimeout(resolve, 1000)); // (3)

                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

(async () => {
    for await (let value of range) { // (4)
        console.log(value); // 1,2,3,4,5
    }
})()

console.log('wait for async execute!')