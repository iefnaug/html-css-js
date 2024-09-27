/**
 * 如果”Y”至少具有与”X”相同的成员，则类型”X”与”Y”兼容。
 */
// type X = {
//     a: string;
// };
// const y = { a: 'A', b: 'B' }; // 有效, 至少它拥有相同的成员 X
// const r: X = y;
// console.log(r.a)

/**
 * 函数参数按类型进行比较，而不是按名称进行比较
 */
// type X = (a: number) => void;
// type Y = (a: number) => void;
// let x: X = (j: number) => undefined;
// let y: Y = (k: number) => undefined;
// y = x; // 有效
// x = y; // 有效


type X = (a: number) => undefined;
type Y = (a: number, b: number) => undefined;
let x: X = (a: number) => undefined;
let y: Y = (a: number) => undefined; // 缺少 b 参数
y = x; // 有效