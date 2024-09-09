//创建方式
// let arr = new Array()
// let arr2 = []

// let arr = [1,3,5,7,9];
// console.log(arr.at(-1))
//
// for (let v of arr) {
//     console.log(v);
// }


/*
arr.push(...items) —— 从尾端添加元素，
arr.pop() —— 从尾端提取元素，
arr.shift() —— 从首端提取元素，
arr.unshift(...items) —— 从首端添加元素。
 */


/*
修改原数组
arr.splice(start[, deleteCount, elem1, ..., elemN])
 */
// let arr = [1,3,5,7,9];
// let deletedElements = arr.splice(2, 1 , 10, 11, 12);
// console.log(deletedElements)
// console.log(arr)
// arr.splice(1, 0, 2);
// console.log(arr);

/*
slice复制原数组的部分
 */
// let arr = [1,3,5,7,9];
// let numbers = arr.slice(1, 3);
// console.log(numbers);

/*
concat
 */
// let arr = [1,3,5,7,9];
// let numbers = arr.concat(2,2,2);
// console.log(numbers)
// arr.forEach((item, index, array) => {
//     console.log(item, index, array);
// })

/*
filter
 */
// let arr = [1,3,5,7,9];
// let ret = arr.filter((item, index, array) => {
//     return item > 5;
// });
// console.log(ret)

/*
map
 */
// let arr = [1,3,5,7,9];
// let ret = arr.map(item => {
//     return item * 2;
// });
// console.log(ret);

/*
sort
 */
// let arr = [1,3,7,9,11,5];
// arr.sort(); //默认按照字符串排序
// arr.sort((a,b) => a-b);
// arr.sort((a,b) => b - a);
// console.log(arr)
// arr.reverse();
// console.log(arr)

/*
split, join
 */
// let str = "a,b,c,d";
// let arr = str.split(",");
// console.log(arr);
// arr = arr.join(".");
// console.log(arr)

/*
reduce
 */
// let arr = [1,3,5,7,9];
// let sum = arr.reduce((acc, item, index, array) => {
//     return acc + item
// }, 10)
// console.log(sum)


/*
可迭代
 */
let obj = {
    from: 1,
    to: 10
}
obj[Symbol.iterator] = function () {
    //返回一个迭代器对象
    return {
        current: this.from,
        last: this.to,
        //返回一个对象，标识是否迭代完成和当前迭代的返回值
        next() {
            if (this.current <= this.last) {
                return {done: false, value: this.current++}
            } else {
                return {done: true}
            }
        }
    }
};

for (let i of obj) {
    console.log(i)
}