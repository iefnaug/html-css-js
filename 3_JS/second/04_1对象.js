// let user = new Object(); // “构造函数” 的语法
// let user = {};  // “字面量” 的语法

let user = {     // 一个对象
    name: "John",  // 键 "name"，值 "John"
    "age": 30,        // 键 "age"，值 30
    "like you": true,
    0: '0.0' //调用时只能是中括号[]
};
console.log(user.name)
console.log(user.age)
delete user.name;
console.log(user.name); //undefined
console.log(user["like you"])
console.log(user[0])

/**
 * 计算属性
 */
let prop = "flag";
let prop2 = "count"
let obj = {
    [prop]: true,
    [prop2 + ' time']: 1
}
console.log(obj)

/**
 * 属性简写
 * 用已存在的变量当属性
 */
function createObj(name, age) {
    return {
        name,
        age,
    }
}
obj = createObj('scott', 30)
console.log(obj)

/**
 * 测试属性存在用‘in’
 */
obj = {
    name: 'scott',
    age: 30,
    0: 'test'
}
// console.log("name" in obj) //true
// console.log("test" in obj) //false
// console.log(0 in obj) //true
for (let key in obj) {
    console.log(key, obj[key])
}

console.log('-------------------判断对象是否是空-------------------')
function isEmpty(obj) {
    if (obj === null || obj === undefined) {
        return true
    }
    for (let key in obj) {
        console.log("key: ", key, "value: ", obj[key])
        return false
    }
    return true
}

let obj2 = {}
console.log(isEmpty(obj2))
obj2 = {name: 'scott', age: 18}
console.log(isEmpty(obj2))



console.log('-------------------将数值属性乘2-------------------')
// 在调用之前
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multiplyNumeric(menu) {
    if (menu === null || menu === undefined) {
        return
    }
    for (const menuKey in menu) {
        if (typeof menu[menuKey] === 'number') {
            menu[menuKey] = menu[menuKey] * 2
        }
    }
}
multiplyNumeric(menu)
console.log(menu)