// let user = {
//     name: "John",
//     age: 30
// };
// let clone = {}; // 新的空对象
// 将 user 中所有的属性拷贝到其中
// for (let key in user) {
//     clone[key] = user[key];
// }
// 现在 clone 是带有相同内容的完全独立的对象
// clone.name = "Pete"; // 改变了其中的数据
// console.log( user.name ); // 原来的对象中的 name 属性依然是 John

/**
 * 浅拷贝
 */
// let target = Object.assign({}, clone)
// console.log(target)
// let newObj = {...target}
// console.log(newObj)

/**
 * 深拷贝
 */
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};
