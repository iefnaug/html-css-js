// interface Person {
//     firstName: string;
//     lastName: string;
//     age: number;
//     say: (firstName: string) => void;
// }
//
// let pp: Person = {
//     age: 0,
//     firstName: "",
//     lastName: "？？？",
//     say(firstName: string): void {
//         console.log(firstName, this.lastName)
//     }
// }
// pp.say('scott')

/**
 * 对象的方法共有三种写法。
 */
// // 写法一
// interface AA {
//     f(x: boolean): string;
// }
//
// // 写法二
// interface BB {
//     f: (x: boolean) => string;
// }
//
// // 写法三
// interface CC {
//     f: { (x: boolean): string };
// }

/**
 * interface 继承 type
 */
type Country = {
    name: string;
    capital: string;
};
interface CountryWithPop extends Country {
    population: number;
}