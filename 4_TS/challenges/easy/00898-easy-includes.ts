{
    /**
     * 在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，返回的类型要么是 true 要么是 false。
     */
    type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false

    type Includes<T extends unknown[], R> =
        T extends [infer F, ...infer U]
            ? Equal<F, R> extends true
                ? true
                : Includes<U, R>
            : false;

    type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
    let v:isPillarMen = false
}