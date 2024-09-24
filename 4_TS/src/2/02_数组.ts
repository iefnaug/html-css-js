let ar: number[] = [1, 2, 3];
let ar2: Array<number>;
let ar3: Array<number|string>;

//readonly 不允许修改
const ar4: readonly number[] = [1, 2, 3];
const ar5: ReadonlyArray<number> = [0, 1];
const ar6: Readonly<number[]> = [0, 1]
const ar7 = [0, 1] as const

let ar8: number[][] = [
    [1,1,1], [2,2,2]
]