interface Person {
    //只能在创建的时候赋值
    readonly name: string,
    //可选
    age?: number,
    //任意属性，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
    [_: string]: any,
    union: string|number,
}

let p: Person = {
    name: 'scott',
    //不允许出现未定义的属性
    hobby: 'basketball',
    union: 'un'
}
// p.name = ''
console.log(p.hobby)
console.log(p.union)