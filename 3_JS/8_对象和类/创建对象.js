/**
 * 这种工厂模式虽然可以解决创建多个类似对象的问题，但没有解决对象标识问题（即新创建的对象是什么类型）
 */
// function createPerson(name, age, job) {
//     let o = new Object();
//     o.name = name;
//     o.age = age;
//     o.job = job;
//     o.sayName = function() {
//         console.log(this.name);
//     };
//     return o;
// }
// let person1 = createPerson("Nicholas", 29, "Software Engineer");
// console.log(person1);
// let person2 = createPerson("Greg", 27, "Doctor");
// console.log(person2)

/**
 * 构造函数模式
 * 要创建Person 的实例，应使用new 操作符
 * (1) 在内存中创建一个新对象。
 * (2) 这个新对象内部的[[Prototype]]特性被赋值为构造函数的prototype 属性。
 * (3) 构造函数内部的this 被赋值为这个新对象（即this 指向新对象）。
 * (4) 执行构造函数内部的代码（给新对象添加属性）。
 * (5) 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象
 */
// function Person(name, age, job){
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     //缺点在于，每次调用函数时，都会初始化一个函数对象
//     this.sayName = function() {
//         console.log(this.name);
//     };
// }
// let person1 = new Person("Nicholas", 29, "Software Engineer");
// let person2 = new Person("Greg", 27, "Doctor");
// person1.sayName();  // Nicholas
// person2.sayName();  // Greg
// console.log(person1.constructor === Person);
// console.log(person2.constructor === Person);
// console.log(person1.constructor === person2.constructor)
// console.log(person1 instanceof Person)
// console.log(typeof person1);
// console.log(person1.sayName === person2.sayName); //false不用同一个函数对象

/**
 * 原型模式
 * 无论何时，只要创建一个函数，就会按照特定的规则为这个函数创建一个prototype 属性（指向原型对象）。
 * 默认情况下，所有原型对象自动获得一个名为 constructor 的属性，指回与之关联的构造函数
 */
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
    console.log(this.name);
};
let person1 = new Person();
person1.sayName(); // "Nicholas"
let person2 = new Person();
person2.sayName(); // "Nicholas"
console.log(person1.sayName === person2.sayName); // true
/**
 * 如前所述，构造函数有一个prototype 属性
 * 引用其原型对象，而这个原型对象也有一个
 * constructor 属性，引用这个构造函数
 * 换句话说，两者循环引用：
 */
console.log(Person.prototype.constructor === Person); // true
console.log(person1.__proto__);
console.log(person1.__proto__ === person2.__proto__)
console.log(Person.prototype.isPrototypeOf(person1)) // true
console.log(Object.getPrototypeOf(person1));