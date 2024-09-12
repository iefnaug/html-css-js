/**
 * 解构在内部使用函数ToObject()（不能在运行时环境中直接访问）把源数据结构转换为对象。
 */
let person = {
    name: 'Matt',
    age: 27
};
let {name: n, age: a} = person;
console.log(n, a);
//简写
let {name, age, job='默认值'} = person;
console.log(name, age, job);

let {length} = 'str';
console.log(length);