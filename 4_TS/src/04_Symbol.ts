/**
 * Symbol 是 ES2015 新引入的一种原始类型的值。它类似于字符串，但是每一个 Symbol 值都是独一无二的，与其他任何值都不相等。
 */
let x: symbol = Symbol("s");
let y: symbol = Symbol("s");
console.log(x === y); // false

/**
 * unique symbol
 * 它表示单个的、某个具体的 Symbol 值。只能用const命令声明，不能用let声明。
 */
// 正确
// const xx: unique symbol = Symbol();
// 报错
// let yy: unique symbol = Symbol();

// const x: unique symbol = Symbol();
// // 等同于
// const x = Symbol();

//每个声明为unique symbol类型的变量，它们的值都是不一样的，其实属于两个值类型。
// const a: unique symbol = Symbol();
// const b: unique symbol = Symbol();
// a === b; // 报错

// const x1 = Symbol();
// 类型为 symbol
// let y1: symbol = x1;