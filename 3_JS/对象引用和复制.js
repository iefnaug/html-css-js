let obj = {
    name: 'scott',
    age: 18
}
let obj2 = {}
//克隆，浅拷贝
let assignObj = Object.assign(obj2, obj);
console.log(obj2 === assignObj);
obj2.name = 'joy'
console.log(obj.name)

//深拷贝
function deepClone(obj, targetObj) {
    if (obj === null || obj === undefined) {
        return
    }
    for (let key in obj) {
        if (obj[key] instanceof Object && obj[key] != null) {
            targetObj[key] = {}
            deepClone(obj[key], targetObj[key]);
        } else {
            targetObj[key] = obj[key];
        }
    }
}

let src = {
    name: 'scott',
    box: {
        width: 100,
        height: 200
    }
}
let target = {}
deepClone(src, target)
target.box.width = 20
console.log(target.box.width)
console.log(src.box.width)
