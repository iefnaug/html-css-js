//函数接收任意数量参数
function showVars(title, ...rest) {
    console.log(title);
    for (let v of rest) {
        console.log(v)
    }
    rest.map((v, i) => {
        console.log(v, i)
    })
    console.log(arguments)

    //展开
    console.log(Math.max(...rest));
}
showVars('test', 1,2,3,4,5)