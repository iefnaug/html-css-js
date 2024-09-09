// let worker = {
//     someMethod() {
//         return 1;
//     },
//
//     slow(x) {
//         console.log("Called with " + x);
//         return x * this.someMethod(); // (*)
//     }
// };
//
// function cachingDecorator(func) {
//     let cache = new Map();
//     return function(x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//         let result = func.call(this, x); // 现在 "this" 被正确地传递了
//         cache.set(x, result);
//         return result;
//     };
// }
//
// worker.slow = cachingDecorator(worker.slow); // 现在对其进行缓存
//
// console.log( worker.slow(2) ); // 工作正常
// console.log( worker.slow(2) ); // 工作正常，没有调用原始函数（使用的缓存）


/*
改变函数上下文this
func.call(context, arg1, arg2, ...) 多个参数
func.apply(context, ...args) 传递数组
 */
// let obj = {
//     sum: function sum(a, b, c) {
//         return a + b + c;
//     }
// }
// let sum = obj.sum;
// console.log(sum.call(obj, 1,2,3));
// console.log(sum.apply(obj, [1,2,3]));


/*
bind
 */
// let user = {
//     firstName: "John",
//     sayHi() {
//         console.log(`Hello, ${this.firstName}!`);
//     }
// };
//
// // setTimeout(user.sayHi, 1000); // Hello, undefined!
//
// let sayHi = user.sayHi.bind(user)
// setTimeout(sayHi, 1000); // Hello, undefined!
//
// function mul(a, b) {
//     return a * b;
// }
// let newMul = mul.bind(null, 2); //将函数入参第一个参数固定为2，后续只需从第二个参数开始传递
// console.log(newMul(3));
// console.log(newMul(4));


/*
箭头函数没有this, 如果需要this，它将从外部获取
 */
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
        this.students.forEach(
            student => {
                console.log(this.title + ': ' + student);
            }
            // function (student) {
            //     console.log(this.title + ': ' + student)
            // }
        );
    }
};
group.showList();