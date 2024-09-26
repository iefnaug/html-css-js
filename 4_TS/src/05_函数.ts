/**
 * 函数的类型声明，需要在声明函数时，给出参数的类型和返回值的类型。
 */
// function hello(txt: string): void {
//     console.log("hello " + txt);
// }

// 写法一
// const hello1 = function (txt: string) {
//     console.log("hello " + txt);
// };

// 写法二 类型： (txt: string) => void
// type MyFunc = (a: string, b: number) => void;
// const hello2: MyFunc = function (txt: string, txt2: number) {
//     console.log(txt, txt2);
// };

// function add(x: number, y: number) {
//     return x + y;
// }
//
// const myAdd: typeof add = function (x, y) {
//     return x + y;
// };


// 写法三 对象
// let fn2: {
//     (a: string): number
// }
// fn2 = function(a: string): number {
//     return parseInt(a)
// }

//写法四 接口
// interface myfn {
//     (a: number, b: number): number;
// }
// let fn2: myfn = function(a: number, b: number) {
//     return a + b;
// }

//function类型
// function doSomething(f: Function) {
//     return f(1, 2, 3);
// }

//箭头函数是普通函数的一种简化写法，它的类型写法与普通函数类似。
// let fn2 = (s: string, n: number): string => {
//     return s.repeat(n);
// }


// rest 参数为数组
// function joinNumbers(...nums: number[]) {
//     // ...
// }
// rest 参数为元组
// function f(...args: [boolean, number]) {
//     // ...
// }

// function multiply(n: number, ...m: number[]) {
//     return m.map((x) => n * x);
// }
// let m: number[] = [1,3,5];
// let numbers: number[] = multiply(3, ...m);
// console.log(numbers)

/**
 * readonly 只读参数
 */
// function arraySum(arr: readonly number[]) {
    // arr[0] = 0; // 报错
// }

/**
 * 高阶函数
 * 一个函数的返回值还是一个函数，那么前一个函数就称为高阶函数（higher-order function）。
 */
// let fn2: Function = (someValue: number) => (multiplier: number) => someValue * multiplier;
// let v = fn2(2)(3);
// console.log(v)


/**
 * 函数重载
 */
// function reverse(str: string): string;
// function reverse(arr: any[]): any[];
//完整定义
// function reverse(stringOrArray: string | any[]): string | any[] {
//     if (typeof stringOrArray === "string")
//         return stringOrArray.split("").reverse().join("");
//     else return stringOrArray.slice().reverse();
// }
// let s = reverse('123');
// console.log(s)

/**
 * 构造函数
 */
class Animal {
    numLegs: number = 4;
}
//构造函数的类型写法，就是在参数列表前面加上new命令。
type AnimalConstructor = new (s: string) => Animal;

function create(c: AnimalConstructor): Animal {
    return new c('sss');
}

const aa = create(Animal)
console.log(aa)

//构造函数还有另一种类型写法，就是采用对象形式。
type F = {
    new (s: string): Animal;
};
function create2(c: F): Animal {
    return new c('sss')
}


