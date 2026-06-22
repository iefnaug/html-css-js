/**
 * 不使用 ReturnType 实现 TypeScript 的 ReturnType<T> 泛型
 *
 * ReturnType作用
 * 避免重复定义类型：不用手动声明返回类型，直接从函数推导
 * 保持类型同步：函数返回值变化时，类型自动更新
 * 类型安全保障：确保变量类型与函数返回值一致
 */

{
    const fn = (v: boolean) => {
        if (v)
            return 1
        else
            return 2
    }

    let ret: ReturnType<typeof fn> = fn(true)
    console.log(ret)

    type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer G ? G : never;
    let v: MyReturnType<typeof fn> = fn(true)
    console.log(v)
}
