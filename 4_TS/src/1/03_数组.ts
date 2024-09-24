//数组
let arr3: number[] = [1,3,5,7]
let arr4: Array<number> = [2,3,5];
console.log(arr3, arr4)
//类数组
function sum1() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

interface IArguments0 {
    [index: number]: any; //索引是数字，值是任意类型
    length: number;
    callee: Function;
}

//接口定义数组
interface IArguments2 {
    [index: string]: any; //索引是字符串，值是任意类型
}

let aa: IArguments2 = {
    t: 1,
    t2: 2,
    t3: 3,
}
console.log(aa)
let bb: IArguments2 = ['q','b']
console.log(bb)
