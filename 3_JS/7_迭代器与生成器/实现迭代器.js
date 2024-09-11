// let arr = [1,2];
// //获取内置的迭代器对象
// let iterator = arr[Symbol.iterator]();
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

class Counter {
    constructor(limit) {
        this.count = 1;
        this.limit = limit;
    }
    //每次调用都返回全新的迭代器对象
    [Symbol.iterator]() {
        let count = this.count, limit = this.limit;
        return {
            next() {
                // console.log(this)
                if (count <= limit) {
                    //返回IteratorResult
                    return {
                        done: false,
                        value: count++
                    }
                } else {
                    return {
                        done: true,
                        // value: undefined
                    }
                }
            },
            return() {
                console.log('stop early...', count)
                return {done: true}
            }
        };
    }
}

let foo = new Counter(5);
for (let i of foo) {
    console.log(i);
}
for (let i of foo) {
    if (i >= 3) {
        break;
    }
    console.log(i);
}
//结构，提前结束了
let [a, b] = foo;