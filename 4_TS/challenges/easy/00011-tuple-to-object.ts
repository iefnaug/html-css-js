/**
 * T[number]：索引访问类型：获取元组 T 中所有元素的联合类型
 * key in：遍历联合类型中的每个成员
 * : key：值类型与键类型保持相同
 *
 * 使用 PropertyKey 替代显式的 string | number | symbol
 *
 * T[]（可变数组）是 readonly T[]（只读数组）的子类型。
 *
 */
type TupleToObject<T extends readonly PropertyKey[]> = {
    [key in T[number]]: key
}

/**
 * const tuple = [...] as const 类型推断为  readonly ['tesla', 'model 3', 'model X', 'model Y']
 * let tuple = [...] 类型推断为 string[]
 */

const tuple = ['tesla', 'model 3', 'model X', 'model Y']  as const
// let tuple = ['tesla', 'model 3', 'model X', 'model Y']

type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

let v:result = {
    tesla: 'tesla',
    'model 3': 'model 3',
    'model X': 'model X',
    'model Y': 'model Y',
}
console.log(v)
console.log(v["model 3"])

// ✅ 这些赋值都是合法的
// const arr1: string[] = ['a'];
// const arr2: readonly string[] = arr1; // 可变 → 只读, 只读数组不可以赋值给可变数组
// const arr3: readonly PropertyKey[] = arr2;


/**
 * 强制输入的tuple为只读数组，确保元组的元素不能被修改
 */
// 使用 readonly unknown[] 配合类型守卫
type IsLiteralTuple<T extends readonly unknown[]> =
    T extends readonly [unknown, ...unknown[]]
        ? { [K in keyof T]: T[K] extends PropertyKey ? T[K] : never } extends T
            ? T
            : never
        : never;


type TupleToObject2<T extends readonly PropertyKey[]> = IsLiteralTuple<T> extends never ? never : {
    [v in T[number]]: v
}


const tuple2 = ['tesla', 'modelY', 'modelX'] as const
// let tuple2 = ['tesla', 'modelY', 'modelX']
type result2 = TupleToObject2<typeof tuple2>
let v2:result2 = {
    tesla: 'tesla',
    'modelY': 'modelY',
    'modelX': 'modelX',
}
console.log('------------------')
console.log(v2)

