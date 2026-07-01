{
    /**
     * 在类型系统里实现通用的 Array.push
     */
    type Push<T extends unknown[], U> = [...T, U]
    type PushResult = Push<[1, 2, 3], 4> // [1, 2, 3, 4]
    let a:PushResult = [1, 2, 3, 4]
}
