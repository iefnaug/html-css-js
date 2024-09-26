/**
 * TypeScript 数组有一个根本特征：所有成员的类型必须相同，但是成员数量是不确定的，可以是无限数量的成员，也可以是零成员。
 */

//数组声明方式
// let arr: number[] = [1, 2, 3];
// let arr2: Array<number> = [1, 2, 3];
// interface Arr {
//     [index: number]: string;
// }
// let arr3: Arr = ['1', '2', '3', '4'];

//联合类型数组
// let arr: (string|number)[] = ['111']
// let arr2: Array<number | string> = [1,2,3]

//type
// type t1 = string[]
// type t2 = t1[number]

//只读数组  readonly number[]与number[]视为两种不一样的类型，后者是前者的子类型。
// const ar: readonly number[] = [0, 1];
// ar[1] = 2; // 报错
// ar.push(3); // 报错
// delete ar[0]; // 报错
// const a1: ReadonlyArray<number> = [0, 1];
// const a2: Readonly<number[]> = [0, 1];
// const arr = [0, 1] as const;
// arr[0] = [2]; // 报错

//多维数组
// let multi: number[][] = [
//     [1, 2, 3],
//     [23, 24, 25],
// ];


/**
 * 元组（tuple）是 TypeScript 特有的数据类型，JavaScript 没有单独区分这种类型。它表示成员类型可以自由设置的数组，即数组的各个成员的类型可以不同。
 */

//可选成员只能在最后
// const s: [string, string, boolean?] = ["a", "b", true];
//不限数量
// type NamedNums = [string, ...number[]];
// const b: NamedNums = ["B"];
// const b2: NamedNums = ["B", 1, 2, 3];
//Tuple[number]表示元组Tuple的所有数值索引的成员类型，所以返回string|number|Date，即这个类型是三种值的联合类型。
// type Tuple = [string, number, Date];
// type TupleEl = Tuple[number]; // string|number|Date

//只读元组
// type t = readonly [number, string];
// type t2 = Readonly<[number, string]>;
// type t1 = readonly [number, number];
// type t2 = [number, number];
// let x: t2 = [1, 2];
// let y: t1 = x; // 正确
// x = y; // 报错


//因为只读元组不能替代元组。
// function distanceFromOrigin([x, y]: [number, number]) {
//     return Math.sqrt(x ** 2 + y ** 2);
// }
// let point = [3, 4] as const; //只读元组
// distanceFromOrigin(point); // 报错