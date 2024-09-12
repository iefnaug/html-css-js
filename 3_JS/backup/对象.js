//声明
// let obj = new Object()
// let obj2 = {}

//属性
let obj = {
    name: 'scott',
    age: 18 ,
}
//添加
obj.hobby = 'basketball'
//删除
delete obj.age
console.log(obj)

//计算属性
let fruit = 'apple'
let compute = {
    [fruit + '00']: 10
}
console.log(compute.apple00)
// fruit = 'pear'
// console.log(compute.pear)

//属性名简写
function retObj(name, age) {
    return {
        name,
        age,
    }
}
let ret = retObj('scott', '18');
console.log(ret)
console.log('name' in ret)
console.log('name1' in ret)

//遍历所有属性
obj = {
    name: 'scott',
    age: 18,
    hobby: 'basketball'
}
for(let key in obj) {
    console.log(key)
}