{
    /**
     * 实现内置的 Parameters<T> 类型，而不是直接使用它，可参考TypeScript官方文档。
     */
    type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;
    type Result = Parameters<(name: string, age: number) => void> // [string, number]
    let v: Result = ['name', 18]
}