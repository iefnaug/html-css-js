//boolean
let isDone: boolean = false;
//数字
let num: number = 0;
//字符串
let str: string = `test${num}`;
console.log(isDone, num, str)
//数组
let arr: number[] = [1,2,3];
let arr2: Array<number> = [4,5,6];
console.log(arr)
//元组
let tuple: [string, number] = ['a', 1]
console.log(tuple[0], tuple[1]);
//枚举, 默认从0开始
enum Color {RED = 1, GREEN}
let c: Color = Color.GREEN;
console.log(c)
let s: string = Color[1];
console.log(s); //red
//Any类型
let anyType: any = 1
console.log(anyType)
anyType = 'zfc'
console.log(anyType)
//object
let obj: Object = {}
//void
function test(): void {
    //无返回值
}
//never
function test2(): never {
    while (true) {

    }
}
//类型断言
let someValue: any = 'a';
let l = (someValue as string).length;
let l2 = (<string>someValue).length;
console.log(l, l2)


//联合类型，表示取值可以为多种类型中的一种
 let union: string|number;
union = 7;
union = 'str'
//变量只能调用共有的属性或方法
// function getLen(some: string|number): number {
//     return some.length;
// }