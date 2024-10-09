// // 生成器函数声明
// function* generatorFn() {}
//
// // 生成器函数表达式
// let generatorFn = function* () {}
//
// // 作为对象字面量方法的生成器函数
// let foo = {
//     * generatorFn() {}
// }
//
// // 作为类实例方法的生成器函数
// class Foo {
//     * generatorFn() {}
// }
//
// // 作为类静态方法的生成器函数
// class Bar {
//     static * generatorFn() {}
// }


// function* generatorFn() {
//     console.log('start execute')
//     return 'foo';
// }
// let generatorObject = generatorFn(); //这里不会执行，调用next()方法开始执行函数
// console.log(generatorObject);         // generatorFn {<suspended>} //一开始处于暂停状态
// console.log(generatorObject.next());  // { done: true, value: 'foo' }

// function* gen() {
//     console.log('start')
//     //执行到yield就会暂停，并返回值
//     yield 1;
//     yield 2;
//     yield 3;
//     return 4;
// }
// let g = gen();
// console.log(g.next()) //第一次调用打印start
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())


// function* gen2() {
//     let count = 10;
//     while(count < 100) {
//         console.log(count)
//         yield count++
//     }
// }
// let g2 = gen2();
// console.log(g2.next())
// console.log(g2.next())
// console.log(g2.next())

// function* generatorFn(initial) {
//     console.log(initial);
//     console.log(yield);
//     console.log(yield);
// }
//
// let generatorObject = generatorFn('foo');
//
// console.log(generatorObject.next('bar'));  // foo 而不是 bar
// console.log(generatorObject.next('baz'));  // baz
// console.log(generatorObject.next('qux'));  // qux


function* gen() {
    yield *[1,2,3,4,5]
}

let g = gen();
console.log(g.next());
console.log(g.next());
// console.log(g.return(100));
try {
    console.log(g.throw(1111));
} catch (e) {
    console.log('error cache', e)
}
console.log(g.next());
// for (let i of gen()) {
//     console.log(i)
// }