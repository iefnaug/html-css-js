{
    /**
     * TS支持的运算逻辑
     * https://github.com/jiaozitang/ts-demo
     */


    /**
     * 1. 条件 x extends y ? z : w
     */
    type isTwo<T> = T extends 2 ? true : false
    type Result = isTwo<2> // true
    type Result2 = isTwo<3> // false

    // let v1:Result = false;
    // console.log(v1)

    /**
     * 2. 约束 extends
     *
     * 通过 T extends Length 约束了 T 的类型，必须是包含 length 属性，且 length 的类型必须是 number。
     */
    interface Length {
        length: number
    }

    function fn1<T extends Length>(arg: T): number{
        return arg.length
    }

    console.log(fn1({name: 'g', length: 3}))

    /**
     * 3. 推导：infer
     *
     * 推导则是类似 js 的正则匹配，都满足公式条件时，可以提取公式中的变量，直接返回或者再次加工都可以。
     */
    // 推导：infer
    // 提取元组类型的第一个元素：
    // extends 约束类型参数只能是数组类型，因为不知道数组元素的具体类型，所以用 unknown。
    // extends 判断类型参数 T 是不是 [infer F, ...infer R] 的子类型，如果是就返回 F 变量，如果不是就不返回
    type First<T extends unknown[]> = T extends [infer F, ...infer R] ? F : never; //1

    //声明元组类型，数量固定
    type tp = [string, number];
    //元组字面量
    type tpConst = ['hello',2,3];
    //声明数组类型，动态数量
    type nb = number[]

    type t1 = First<tp> //string
    let s:t1 = 'sa'

    type t2 = First<tpConst> //'hello'
    let s2:t2 = 'hello'

    type t3 = First<nb> //never
    let s3:t3


    /**
     * 4. 联合 |
     * 联合代表可以是几个类型之一。
     */
    type Union = 1 | 2 | 3


    /**
     * 5. 交叉 &
     * 交叉代表对类型做合并。
     */
    type ObjType = { a: number } & { c: boolean }
    let obj: ObjType = {a: 1, c: false}
}

{
    /**
     * 6. 索引查询：keyof T
     * keyof 用于获取某种类型的所有键，其返回值是联合类型
     */
    type all = keyof {name1: string, age2: number}
    let v1: all = 'name1'
    let v2: all = 'age2'
}

{
    /**
     * 7. 索引访问：T[K]
     * T[K] 用于访问索引，得到索引对应的值的联合类型
     */
    interface I3 {
        name: string,
        age: number,
        man: true
    }

    type union = I3[keyof I3] // string | number
    let v1: union = 'a'
    let v2: union = 1
    let v3: union = true
}

{
    /**
     * 8. 索引遍历： in
     * in 用于遍历联合类型
     */
    const obj = {
        name: 'tj',
        age: 11
    }

    type Person = {
        //遍历联合类型，组成新的类型
        [P in keyof typeof obj]: (typeof obj)[P]
    }

    let p: Person = {
        name: 'bj',
        age: 11
    }
}

{
    /**
     * 9. 索引重映射： as
     */
    // 通过索引查询 keyof，索引访问 t[k]，索引遍历 in，索引重映射 as，返回全新的 key、value 构成的新的映射类型
    type MapType<T> = {
        [
        Key in keyof T
            //Key & string 只保留字符串类型的键
            as `${Key & string}${Key & string}${Key & string}`
        ]: [T[Key], T[Key], T[Key]]
    }
    type res3 = MapType<{ a: 1, b: 2 , 1: 'haha'}>
    let v:res3 = {
        aaa: [1,1,1],
        bbb: [2,2,2]
    }
}