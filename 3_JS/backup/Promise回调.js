// let promise
// try {
//      promise = new Promise((resolve, reject) => {
//         // console.log('test')
//         setTimeout(() => {
//             // resolve("done")
//             reject(new Error('wrong!'))
//         }, 1000);
//     })
// } catch (error) {
//     console.error(error)
// }

// setTimeout(()=>{
//     console.log(promise);
//     console.log("----------")
// }, 500)
//
// setTimeout(()=>{
//     console.log('execute here')
//     console.log('---', promise);
// }, 2000)


// let promise = new Promise((resolve, reject) => {
//     // console.log('test')
//     setTimeout(() => {
//         resolve("done")
//         // reject(new Error('wrong!'))
//     }, 1000);
// })
// promise.then(value => {
//     console.log(value)
// }, error => {
//     console.log(error)
// })


// new Promise((resolve, reject) => {
//     resolve('done');
// }).then(value => {
//     console.log('value', value);
// }, error => {
//     console.log('error', error);
// }).finally(() => {
//     console.log('finally')
// })


// new Promise((resolve, reject) => {
//     throw new Error('error occurred');
// }).finally(() => {
//     console.log('finally');
// }).catch(error => {
//     console.error(error);
// })


/**
 * Promise链式调用
 */

// new Promise((resolve, reject) => {
//     // resolve(1);
//     reject(-1) //被catch捕获
// }).then(result => {
//     console.log(result)
//     return result * 10;
// }).then(result => {
//     console.log(result)
//     return result * 10;
// }).then(result => {
//     throw new Error('ERROR')
//     // console.log(result);
// }).catch(e => {
//     if (e instanceof Error) {
//         console.log("Error", e)
//     } else {
//         console.log('reject', e)
//     }
// })

/**
 * 延迟链式
 */
// new Promise((resolve, reject) => {
//     resolve(1);
// }).then(res => {
//     console.log(res);
//     return new Promise((resolve, reject) => {
//         // setTimeout(() => resolve(res * 2), 2000);
//         setTimeout(() => reject(new Error('error occurred')), 2000);
//     });
// }).then(res => { //等待上个promise有结果
//     console.log(res);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(res * 2), 2000);
//     });
// }).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })

/**
 * 微任务队列
 */
// let promise = Promise.resolve('done');
// promise.then((value) => {
//     console.log(value)
// })
// console.log('first call')


/**
 * async await
 */
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });
    let result = await promise; // 等待，直到 promise resolve (*)
    console.log(result); // "done!"
}
f();
console.log('wait...')
