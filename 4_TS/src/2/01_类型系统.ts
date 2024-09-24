console.log(typeof String('a')) //string
console.log(typeof (new String('a'))) //obj2ect

// let obj2: {};
let obj2: object
obj2 = undefined
obj2 = null
// obj2 = 'aaa'
// obj2 = 12
console.log(obj2)


/**
 * 联合类型
 */
let s1: string|number|'a'
s1 = 1
console.log(s1)

/**
 * 交叉类型
 * 交叉类型的主要用途是表示对象的合成。
 */
let obj3: { foo: string } & { bar: string };
obj3 = {
    foo: "hello",
    bar: "world",
};

/**
 * type命令
 * type命令用来定义一个类型的别名。
 */
type Age = number;
let age: Age = 55;

type World = "world";
type Greeting = `hello ${World}`;
let typeStr: Greeting = 'hello world'
console.log(typeStr)

/**
 * typeof
 */
const aaa: object = {x: 0}
console.log(typeof aaa)
type te = typeof aaa; //这里和上面的typeof含义不同