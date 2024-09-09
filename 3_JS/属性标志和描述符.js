/**
对象属性（properties），除 value 外，还有三个特殊的特性（attributes），也就是所谓的“标志”：

writable — 如果为 true，则值可以被修改，否则它是只可读的。
enumerable — 如果为 true，则会被在循环中列出，否则不会被列出。
configurable — 如果为 true，则此属性可以被删除，这些特性也可以被修改，否则不可以。

当我们用“常用的方式”创建一个属性时，它们都为 true
 */

// let user = {
//     name: "John"
// };
// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// console.log(JSON.stringify(descriptor));


let user = {
    name: 'gf'
};
Object.defineProperty(user, "name2", {
    // value: "John",
    enumerable: true,
    // writable: true,
    configurable: true,
    get() {
        return this.name;
    },
    set(value) {
        this.name = value;
    }
});
console.log(user.name2);

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null, 2 ))


let obj =  {
    get name() {
        console.log('call get name')
        return 'gf'
    }
}
console.log(obj.name)