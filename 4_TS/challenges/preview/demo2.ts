{
    /**
     * 模式匹配提取
     */
    // type GetParameters<Func extends Function> =
    //     Func extends (...args: infer Args) => unknown ? Args : never;

    type GetParameters<Func extends Function> =
        Func extends (...args: infer Args) => unknown
            ? Args
            : never;

    type ParametersResult = GetParameters<(name: string, age: number) => string>
    let v: ParametersResult = ['tj', 11]
    console.log(v)

    /**
     * ParametersResult实际类型
     * {
     *   0: string;
     *   1: number;
     *   length: number;
     *   push: ...;  // 数组方法
     *   ...
     * }
     */
    // let v2: ParametersResult = {
    //     0: 'tj',
    //     1: 7,
    // }
}


{
    /**
     * 重新构造做变换
     *
     * 模板字面量类型：`${...}` 语法支持类型层面的字符串操作
     * infer 关键字：用于在条件类型中提取和推断类型
     * Uppercase<T>：TypeScript 内置的字符串大写转换工具类型（ES2021 特性）
     */
    type CapitalizeStr<Str extends string> =
        Str extends `${infer First}${infer Rest}`
            ? `${Uppercase<First>}${Rest}` : Str;

    type CapitalizeResult = CapitalizeStr<'tang'>
    let v: CapitalizeResult = 'Tang'
    console.log(v)
}

{
    /**
     * 递归复用做循环
     */
    type ReverseArr<Arr extends unknown[]> =
        Arr extends [infer First, ...infer Rest]
            ? [...ReverseArr<Rest>, First]
            : Arr;


    type ReverseArrResult = ReverseArr<[1, 2, 3, 4, 5]>
    let v: ReverseArrResult = [5, 4, 3, 2, 1]

    type r = ReverseArr<number[]>
}

{
    /**
     * 数组长度做计数
     */
    type BuildArray<
        Length extends number,
        Ele = unknown,
        Arr extends unknown[] = []
    > = Arr['length'] extends Length
        ? Arr
        : BuildArray<Length, Ele, [...Arr, Ele]>;

    type Add<Num1 extends number, Num2 extends number> =
        [...BuildArray<Num1>, ...BuildArray<Num2>]['length'];


    type AddResult = Add<32, 25>
    let v: AddResult = 57
}