/**
 * 实现内置的 Exclude<T, U> 类型，但不能直接使用它本身。
 *
 * 从联合类型 T 中排除 U 中的类型，来构造一个新的类型。
 *
 * 例如：
 *
 * type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
 */

{
    type MyExclude<T, U> = T extends U
        ? never
        : T
    type a = 'a' | 'b' | 'c' | 'd'
    type b = 'b'
    type c = MyExclude<a, b> // 'a' | 'c' | 'd'

    let cv: c = 'a'
    let cv2: c = 'b'
    let cv3: c = 'c'
    console.log(cv, cv2, cv3)
}