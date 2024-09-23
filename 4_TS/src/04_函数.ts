function sum(n1: number, n2: number): number {
    return n1 + n2;
}

let a: number = sum(1, 2);
console.log(a)

//好恶心
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

//接口定义函数形状
interface Func {
    (x: number, y?: number): number
}
let myFunc: Func = function (a: number = 1, b?: number): number {
    return a + b;
}



function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

let number = reverse(123);
let ss = reverse('abc');
