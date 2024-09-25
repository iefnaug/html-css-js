/**
 * any任意类型
 */
// function add(x, y) {
//     return x + y;
// }

// function add(x: number, y: string): string {
//     return x + y;
// }

// let x:any = 10;




/**
 * unknown 对比 any有很多限制
 * 不能直接调用unknown对象的属性或者方法，除非明确类型
 * 再次，unknown类型变量能够进行的运算是有限的，
 * 只能进行比较运算（运算符==、===、!=、!==、||、&&、?）、取反运算（运算符!）、typeof运算符和instanceof运算符这几种，其他运算都会报错。
 */
// let x: unknown;
// x = true; // 正确
// x = 42; // 正确
// x = "Hello World"; // 正确
//
// let v: unknown = 123;
// let v1: boolean = v; // 报错
// let v2: number = v; // 报错

// let s: unknown = 'aaa'
// if (typeof s === 'string') {
//     //明确类型后，才可以调用属性或方法
//     console.log(s.length)
//     console.log(s.indexOf('aa'))
// }



/**
 * never类型
 * 可以赋值给任何类型
 * A function returning never cannot have a reachable end point.
 */
function fn(x: string | number): never {
    throw new Error('error')
    // while (true) {
    //
    // }
}
let a = fn(1)