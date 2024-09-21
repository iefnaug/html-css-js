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