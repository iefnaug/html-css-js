// let dest, src, result;
// /**
//  * 简单复制
//  */
// dest = {};
// src = { id: 'src' };
// result = Object.assign(dest, src); //浅复制
// console.log(dest);
// console.log(result === dest);

/**
 * 判断是否相等，强于===
 */
// console.log(Object.is(true, 1));  // false
// console.log(Object.is({}, {}));   // false
// console.log(Object.is("2", 2));   // false
// // 正确的0、-0、+0 相等/不等判定
// console.log(Object.is(+0, -0));   // false
// console.log(Object.is(+0, 0));    // true
// console.log(Object.is(-0, 0));    // false
// // 正确的NaN 相等判定
// console.log(Object.is(NaN, NaN)); // true

/**
 * 计算属性
 */
// const nameKey = 'name';
// const ageKey = 'age';
// const jobKey = 'job';
//
// let person = {
//     [nameKey]: 'Matt',
//     [ageKey]: 27,
//     [jobKey]: 'Software engineer'
// };
// console.log(person);

/**
 * 简写
 */
let person = {
    name_: '',
    get name() {
        return this.name_;
    },
    set name(name) {
        this.name_ = name;
    },
    sayName() {

        console.log(`My name is ${this.name_}`);
    }
};
person.name = 'Matt';
person.sayName(); // My name is Matt