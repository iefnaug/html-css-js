/*
构造函数盗用
 */

// function SuperType(color) {
//     this.color = color
// }
//
// function SubType(color) {
//     SuperType.call(this, color);
// }
//
// let subType = new SubType('green');
// console.log(subType.hasOwnProperty('color'))

/**
 * 原型式继承
 */
let person = {
    name: 'scott'
}
let p = Object.create(person);
console.log(p.__proto__);
console.log(p.name)