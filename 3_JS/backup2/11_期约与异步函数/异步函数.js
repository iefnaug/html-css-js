/**
 * 异步函数async如果使用return 关键字返回了值（如果没有return 则会返回undefined），
 * 这个值会被Promise.resolve()包装成一个期约对象
 *
 * await会暂停异步函数的执行，直到它等待的Promise返回
 * await关键字必须在异步函数中使用
 */
async function sayHi(name) {
    return `hi ${name}`;
}

async function doSomething() {
    let p = new Promise((resolve, reject) => {
        // setTimeout(resolve, 2000, 'ok')
        reject('error')
    });
    console.log('开始等待')
    let v = await p;
    console.log('等待结束', v)
    return v + ' - over';
}

doSomething().then(result => console.log(result)).catch(err => console.log(err));

