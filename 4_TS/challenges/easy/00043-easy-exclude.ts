/**
 * 实现内置的 Exclude<T, U> 类型，但不能直接使用它本身。
 *
 * 从联合类型 T 中排除 U 中的类型，来构造一个新的类型。
 *
 * 例如：
 *
 * type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
 *
 *
 * 分布式条件类型：当 T 是裸类型参数（未包裹的联合类型）时，条件类型会自动分配执行
 * 类型过滤：通过返回 never 实现类型排除
 * 联合类型合并：最终结果会自动合并所有非 never 类型
 */

{
    type MyExclude<T, U> = T extends U
        ? never
        : T
    type a = 'a' | 'b' | 'c' | 'd'
    type b = 'b'
    type c = MyExclude<a, b> // 'a' | 'c' | 'd'

    // let cv: c = 'a'
    // let cv2: c = 'b'
    // let cv3: c = 'c'
    // console.log(cv, cv2, cv3)
}