// type OBJ = {
//     x: number;
//     y: number;
//     add(x: number, y: number): number;
//     // 或者写成
//     // add: (x:number, y:number) => number;
// }
// let o: OBJ = {
//     x: 1,
//     y: 1,
//     add(x, y) {
//         return x + y;
//     },
// };


type MyObj = {
    //任意多个属性名，属性值也是任意类型
    [_: string]: any;
}
let myObj: MyObj = {
    a: 1,
    b: '2',
    c: {
        n1: 1,
        n2: 'b',
        n3: false
    }
}