/**
 * 对象的数据属性
 *   [[Configurable]]：表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特
 * 性，以及是否可以把它改为访问器属性。默认情况下，所有直接定义在对象上的属性的这个特
 * 性都是true，如前面的例子所示。
 *   [[Enumerable]]：表示属性是否可以通过for-in 循环返回。默认情况下，所有直接定义在对
 * 象上的属性的这个特性都是true，如前面的例子所示。
 *   [[Writable]]：表示属性的值是否可以被修改。默认情况下，所有直接定义在对象上的属性的
 * 这个特性都是true，如前面的例子所示。
 *   [[Value]]：包含属性实际的值。这就是前面提到的那个读取和写入属性值的位置。这个特性
 * 的默认值为undefined。
 */
// let person = {
//     name: 'scott',
//     age:  11,
//     _hobby: undefined
// }
// //单个属性
// Object.defineProperty(person, "age", {
//     writable: true,
//     configurable: true,
//     enumerable: false //在for...in中不会显示属性
// });
// Object.defineProperty(person, "hobby", {
//     get() {
//         return this._hobby;
//     },
//     set(value) {
//         this._hobby = value;
//     },
//     enumerable: true,
//     configurable: true
// })
// person.hobby = 'basketball';
// for(let key in person) {
//     console.log(key)
// }

/**
 * 定义多个属性
 */
let book = {};
Object.defineProperties(book, {
    year_: {
        value: 2017,
        configurable: false,
        writable: true,
        enumerable: true,
    },
    edition: {
        value: 1,
        configurable: true
    },
    year: {
        get() {
            return this.year_;
        },
        set(newValue) {
            if (newValue > 2017) {
                this.year_ = newValue;
                this.edition += newValue - 2017;
            }
        }
    }
});
book.year = 1983;
console.log(book.year);
let descriptors = Object.getOwnPropertyDescriptors(book);
console.log(JSON.stringify(descriptors, null, 2 ))