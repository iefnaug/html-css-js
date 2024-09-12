// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };
// // rabbit.__proto__ = animal; // 设置 rabbit.[[Prototype]] = animal
// Object.setPrototypeOf(rabbit, animal);
// console.log(rabbit.eats)
// console.log(Object.getPrototypeOf(rabbit));



// let animal = {
//     eats: true
// };
// function Rabbit(name) {
//     this.name = name;
// }
// Rabbit.prototype = animal; //当创建了一个 new Rabbit 时，把它的 [[Prototype]] 赋值为 animal
// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
// console.log( rabbit.eats ); // true


function Rabbit() {}
// 默认的 "prototype" 是一个只有属性 constructor 的对象，属性 constructor 指向函数自身。
// Rabbit.prototype = { constructor: Rabbit }
console.log(Rabbit.prototype.constructor === Rabbit);
let rabbit = new Rabbit(); // 继承自 {constructor: Rabbit}
console.log(rabbit.constructor === Rabbit); // true (from prototype)
