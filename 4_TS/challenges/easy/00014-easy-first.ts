/**
 * 实现一个First<T>泛型，它接受一个数组T并返回它的第一个元素的类型。
 *
 * 例如：
 *
 * type arr1 = ['a', 'b', 'c']
 * type arr2 = [3, 2, 1]
 *
 * type head1 = First<arr1> // 应推导出 'a'
 * type head2 = First<arr2> // 应推导出 3
 */

{
    type First<T extends unknown[]> = T extends [unknown, ...unknown[]] ? T[0] : never

    type arr1 = ['a', 'b', 'c']
    type arr2 = [3, 2, 1]
    type arr3 = []

    type head1 = First<arr1> // 应推导出 'a'
    type head2 = First<arr2> // 应推导出 3
    type head3 = First<arr3> // 应推导出 never

    let a:head1 = 'a'
    let b:head2 = 3
    let c:head3
}


