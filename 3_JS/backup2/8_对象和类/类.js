// // 类声明
// class Person {}
//
// // 类表达式
// const Animal = class {};

// 空类定义，有效
class Foo {}

// 有构造函数的类，有效
class Bar {
    constructor() {}
}

// 有获取函数的类，有效
class Baz {
    get myBaz() {}
}

// 有静态方法的类，有效
class Qux {
    static myQux() {}
}


// class Person {
//     constructor(name) {
//         console.log('person ctor');
//         this.name = name;
//         this.hobbies = ['a', 'b', 'c', 'd', 'e'];
//     }
//     sayHi() {
//         console.log('hi, ' + this.name + '!');
//     }
//     [Symbol.iterator]() {
//         let h = this.hobbies;
//         let index = 0;
//         return {
//             next() {
//                 if (index < h.length) {
//                     return {done: false, value: h[index++]};
//                 } else {
//                     return {done: true};
//                 }
//             }
//         }
//     }
// }
//
// let p = new Person('scott');
// p.sayHi()
// for(let e of p) {
//     console.log(e)
// }


/**
 * 抽象类
 */
class Vehicle {
    constructor() {
        console.log(new.target)
        if (new.target === Vehicle) {
            throw new Error('不能实例化抽象类');
        }
    }
}
// let vehicle = new Vehicle();
class BMW extends Vehicle {
    constructor(props) {
        super(props);
        this.color = 'red'
    }
    showColor() {
        console.log('my car color is ' + this.color);
    }
}
let bmw = new BMW();
bmw.showColor()
