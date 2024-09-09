// let name = 'scott';
// console.log(Date.now())
// //执行一次
// let timerId = setTimeout(function(name) {
//     console.log(Date.now(), name);
// }, 1000, name);
// //取消调度
// clearTimeout(timerId);

let name = 'scott';
console.log(Date.now())
//重复执行
let id = setInterval(function (name) {
    console.log(Date.now(), name)
}, 2000, name);
//取消调度
clearInterval(id);
