/**
 JavaScript 语言（注意，不是 TypeScript）将值分成 8 种类型。
 boolean
 string
 number
 bigint
 symbol
 object
 undefined
 null
 这 8 种基本类型是 TypeScript 类型系统的基础，复杂类型由它们组合而成。
 */
// let n: number = 1
// let bn: bigint = 100n;
// const x: object = { foo: 123 };
// const y: object = [1, 2, 3];
// const z: object = (n: number) => n + 1;
//如果没有声明类型的变量，被赋值为undefined或null，它们的类型会被推断为any
//如果希望避免这种情况，则需要打开编译选项strictNullChecks。
// let a = undefined; // any
// const b = undefined; // any
// let c = null; // any
// const d = null; // any
// let st: string = c


/**
 TypeScript 对五种原始类型分别提供了大写和小写两种类型。
 Boolean 和 boolean
 String 和 string
 Number 和 number
 BigInt 和 bigint
 Symbol 和 symbol
 其中，大写类型同时包含包装对象和字面量两种情况，小写类型只包含字面量，不包含包装对象
 建议只使用小写类型，不使用大写类型。
 */
// const s1: String = "hello"; // 正确
// const s2: String = new String("hello"); // 正确
// const s3: string = "hello"; // 正确
// const s4: string = new String("hello"); // 报错



/**
 Object 类型与 object 类型
 空对象{}是Object类型的简写形式
 大写的Object类型代表 JavaScript 语言里面的广义对象。所有可以转成对象的值，都是Object类型，这囊括了几乎所有的值。
 事实上，除了undefined和null这两个值不能转为对象，其他任何值都可以赋值给Object类型。
 */
// let obj: Object;
// let obj: {};
// obj = true;
// obj = "hi";
// obj = 1;
// obj = { foo: 123 };
// obj = [1, 2];
// obj = (a: number) => a + 1;
// obj = undefined; // 报错
// obj = null; // 报错

//小写object类型不包含原始类型值，只包含对象、数组和函数。
// let obj: object;
// obj = { foo: 123 };
// obj = [1, 2];
// obj = (a: number) => a + 1;
// obj = true; // 报错
// obj = "hi"; // 报错
// obj = 1; // 报错
// obj = undefined
// obj = null

/*
！！！注意，无论是大写的Object类型，还是小写的object类型，都只包含 JavaScript 内置对象原生的属性和方法，用户自定义的属性和方法都不存在于这两个类型之中。
 */
// const o1: Object = { foo: 0 };
// const o2: object = { foo: 0 };
// o1.toString(); // 正确
// o1.foo; // 报错
// o2.toString(); // 正确
// o2.foo; // 报错



/**
 TypeScript 规定，单个值也是一种类型，称为“值类型”。
 */
// let x: "hello";
// x = "hello"; // 正确
// x = "world"; // 报错

//TypeScript 推断类型时，遇到const命令声明的变量，如果代码里面没有注明类型，就会推断该变量是值类型
// x 的类型是 "https"
// const x = "https";
// y 的类型是 string
// const y: string = "https";

// x 的类型是 { foo: number }, 因为对象的属性值是可变的
// const x = { foo: 1 };

// const x: 5 = 4 + 1; // 报错
// const x: 5 = (4 + 1) as 5;
// let x: 5 = 5
// console.log(x)


/**
 联合类型（union types）指的是多个类型组成的一个新类型，使用符号|表示。
 */
// let x: string | number;
// x = 123; // 正确
// x = "abc"; // 正确

// function printId(id: number | string) {
//     console.log(id.toUpperCase()); // 报错
// }
//
// function printId(id: number | string) {
//     if (typeof id === "string") {
//         console.log(id.toUpperCase());
//     } else {
//         console.log(id);
//     }
// }

/**
 * 交叉类型（intersection types）指的多个类型组成的一个新类型，使用符号&表示。
 * 交叉类型的主要用途是表示对象的合成。
 */

//变量x同时是数值和字符串，这当然是不可能的，所以 TypeScript 会认为x的类型实际是never
// let x: number & string;

let obj: { foo: string } & { bar: string };
obj = {
    foo: "hello",
    bar: "world",
};
type A = { foo: number };
type B = A & { bar: number };
let obj2: B = {
    foo: 1,
    bar: 2,
}


/**
 * type命令用来定义一个类型的别名。
 * 别名的作用域是块级作用域
 * TypeScript 规定，typeof 的参数只能是标识符，不能是需要运算的表达式。
 * !!!如果类型A的值可以赋值给类型B，那么类型A就称为类型B的子类型（subtype）
 */
// type Age = number;
// let age: Age = 55;

// type T = typeof Date(); // 报错

// type T = 'hello'
// let t: T = 'hello'
// type T2 = typeof t
// let tt: T2 = 'hello'

//typeof命令的参数不能是类型。
// type Age = number;
// type MyAge = typeof Age; // 报错