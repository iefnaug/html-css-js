/**
 * 每个函数都是Function类型的实例，而Function也有属性和方法，跟其他引用类型一样
 * 函数没有重载
 */

// function say(name, age) {
//     console.log('length: ' + arguments.length)
//     console.log(arguments[0], name)
//     console.log(arguments[1], age)
//     console.log(arguments[2])
// }
// say('hello', 11, 12);

//默认参数
let func = (name, age = 11) => {
    // console.log(arguments[0]); //不支持arguments
    console.log(age)
}
func(2)

/**
 * 函数内的特殊对象
 * arguments、this、new.target
 */
// function jc(num) {
//     if (num <= 1) {
//         return 1;
//     } else {
//         if (jc.caller === jc) {
//             return jc.caller(num - 1) * num;
//         } else {
//             return arguments.callee(num - 1) * num
//         }
//     }
// }
// let ret = jc(4);
// console.log(ret)

function Target() {
    if (!new.target) {
        console.log('没有使用new调用函数')
    } else {
        console.log('使用new')
    }
}
Target()
new Target()