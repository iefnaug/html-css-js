function array(): void {
    let arr: number[] = [1, 2, 3, 4, 5]
    let arr2: Array<number> = [1, 2, 3, 4, 5]

    /**
     * 表示一个string类数组
     */
    interface NumberArray {
        [index: number]: string
    }
    let na: NumberArray = ['1', '2', '3', '4', '5'];
    console.log(na[0], na[1]);

    let arg1: {
        [index: number]: any
        length: number
        callee: Function
    } = arguments
    console.log(arg1);

    let arg2: IArguments = arguments
    console.log(arg2);
}
array()