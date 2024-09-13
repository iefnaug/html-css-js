/**
 * Promise有3种状态
 * 待定（pending）
 * 兑现（fulfilled，有时候也称为“解决”，resolved）
 * 拒绝（rejected）
 *
 * 当状态变更为fulfilled或rejected之后，不可撤销
 */

// let p = new Promise(() => {});
// setTimeout(console.log, 0, p);  // Promise <pending>

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500);
//     // setTimeout(reject, 500);
// });
// setTimeout(console.log, 1000, p1); // Promise <resolved>

// Promise.reject('error').catch(e => {
//     console.log(e)
// })
//
// Promise.resolve('ok').then(ret => {
//     console.log(ret)
// })
// console.log('before')

//
// new Promise((resolve, reject) => {
//     // resolve('ok')
//     // reject('error');
//     reject(new Error('error'));
// }).then(res => {
//     console.log('resolve', res)
// }, rej => {
//     console.log('reject', rej)
// }).catch(err => {
//     console.log(err)
// }).finally(() => {
//     console.log('over!')
// })

// let func;
// new Promise(resolve => {
//     func = () => {
//         resolve();
//     }
// })
// .then(() => {
//     console.log('resolve');
// }, ()=>{
//     console.log('reject');
// })
// setTimeout(func,1000);
// console.log('start')



function createPromise(func) {
    return new Promise(func);
}
//
// //串行异步
// createPromise((resolve, reject) => {
//     console.log(Date.now(), 1);
//     setTimeout(resolve, 1000);
// }).then(resolve => {
//     console.log(Date.now(), 2);
//     return new Promise(resolve => {
//         setTimeout(resolve, 1000)
//     })
// }).then(resolve => {
//     console.log(Date.now(), 3);
//     return new Promise(resolve => {
//         setTimeout(resolve, 1000)
//     })
// }).finally(() => {
//     console.log('done!')
// })


/**
 * Promise.all([])
 */
// let all = Promise.all([new Promise(resolve => setTimeout(resolve, 1000)), new Promise(((resolve, reject) => {resolve()}))]);
// //等待所有Promise resolve之后才会执行
// all.then(result => console.log('end'));

/**
 * Promise.race([]) 执行第一个完成或拒绝的Promise
 */
let p = Promise.race([
    new Promise(resolve => setTimeout(resolve, 1000, '1')),
    new Promise(resolve => setTimeout(resolve, 500, '2')) //这个先返回
]);
p.then((value) => {
    console.log(value);
})