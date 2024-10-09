let num = 11
let str = '11'
let bool = true
let un
let obj = {}
function add(a, b) {}
console.log(typeof num)
console.log(typeof str)
console.log(typeof bool)
console.log(typeof un)
console.log(typeof null)
console.log(typeof obj)
console.log(typeof NaN) //number
console.log(typeof add) //function

console.log(Number(null)) //0
console.log(Number(undefined)) //NaN
console.log(add()) //函数没有返回值时，默认返回 undefined


/**
 * undefined
 * null
 * false
 * 0
 * NaN
 * ""或''（空字符串）
 * 以上转换为布尔值都为false，其它都是true
 */
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(''))
console.log(Boolean({})) //空对象true
console.log(Boolean([])) //空数组true


/**
 * https://www.cnblogs.com/god-of-death/p/16705565.html
 * 整数和浮点数
 * JavaScript 内部，所有数字都是以64位浮点数形式储存，即使整数也是如此
 * 第1位：符号位，0表示正数，1表示负数
 * 第2位到第12位（共11位）：指数部分
 * 第13位到第64位（共52位）：小数部分（即有效数字）
 */
console.log(1 === 1.0) //true
console.log(0.1 + 0.2) //0.30000000000000004 浮点数运算并不准确
console.log(0.3 / 0.1) //2.9999999999999996
console.log(1 / 0) //Infinity
console.log(1 / -0) //-Infinity
console.log(NaN === NaN) //false

//base64
let en = 'btc eth sol bnb'
console.log(btoa(en)) //YnRjIGV0aCBzb2wgYm5i
console.log(atob('YnRjIGV0aCBzb2wgYm5i'))


/**
 * 对象
 */
let o = {
    a: 1,
    b: 's'
}
console.log(Object.keys(o))
for (let key in o) { //遍历key
    console.log(key)
}
console.log('toString' in o) //true
console.log(Object.hasOwnProperty('toString')) //false
