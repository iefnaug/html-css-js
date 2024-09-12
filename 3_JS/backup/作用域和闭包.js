// function count() {
//     let i = 0;
//     function ret() {
//         return i++;
//     }
//     return ret;
// }
// let ret = count();
// let ret2 = count(); //形成全新的作用域链
// let arr = [ret(), ret(), ret(), ret2()];
// console.log(arr)



let name = "John";
function sayHi() {
    console.log("Hi, " + name);
}
name = "Pete";
sayHi(); // 会显示什么："John" 还是 "Pete"？

console.log(globalThis)