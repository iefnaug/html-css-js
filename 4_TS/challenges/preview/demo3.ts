{
    /**
     * 将所有属性变为可选
     */
    type TPartial<T> = {
        [key in  keyof T]?: T[key]
    }

    /**
     * 将所有属性变为必选
     */
    type TRequired<T> = {
        [key in  keyof T]-?: T[key]
    }

    /**
     * 只读属性
     */
    type TReadOnly<T> = {
        readonly [key in  keyof T]: T[key]
    }

    /**
     * 筛选属性
     */
    type TPick<T, S extends keyof T> = {
        [key in S]: T[key]
    }

    interface IPerson    {
        name?: string
        age: number
    }

    let p: IPerson = {
        name: '张三',
        age: 18
    }

    let p2: TPartial<IPerson> = {
        name: '李四',
    }

    let p3: TRequired<IPerson> = {
        name: '王五',
        age: 20,
    }

    let p4: TReadOnly<IPerson> = {
        name: '赵六',
        age: 22,
    }
    // p4.name = 'aa'

    let p5: TPick<IPerson, 'name' | 'age'> = {
        name: 'aa',
        age: 24,
    }
}

{
    interface IPerson    {
        name?: string
        age: number
    }

    /**
     * T extends keyof any 返回的是联合类型 string|number|symbol
     */
    type TRecord<T extends keyof any, M> = {
        [key in T]: M
    }

    let map: TRecord<keyof IPerson, string> = {
        name: '张三',
        age: '18',
    }

    let map2: TRecord<keyof any, string> = {
        name: '李四',
        age: '20',
        1: '1',
        2: '2',
        true: 'true',
    }

    //属性映射
    let map3: {[k in keyof IPerson]: string} = {
        name: '王五',
        age: '22',
    }

    //索引签名
    type PersonKey = 'name' | 'age';
    // let map4: {[k : PersonKey]: string} = {
    //     name: '王五',
    //     age: '22',
    //     1: '1',
    //     2: '2',
    //     3: '3',
    //     true: '1'
    // }

    let map5: {[k : number]: string} = {
        // name: '王五',
        // age: '22',
        1: '1',
        2: '2',
        3: '3',
        // true: '1'
    }
}

{
    interface IPerson    {
        name?: string
        age: number
    }
    /**
     * 排除属性
     * 分布式条件类型（Distributive Conditional Types）。
     */
    type TExclude<T, U> = T extends U ? never : T

    let p: TExclude<IPerson, 'name'> = {
        age: 22,
        name: 'gf'
    }

    let p2: TExclude<keyof IPerson, 'name'> = 'age'
}

{
    type IExtract<T, U> = T extends U ? T : never
    let v: IExtract<'name' | 'age', 'name'> = 'name'
    let v2: IExtract<string | number, string> = 'name'
}


{
    type TOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

    type OmitRes = TOmit<{ name: 'aa', age: 18 }, 'name'>
    let o: OmitRes = {
        age: 18,
    }
}