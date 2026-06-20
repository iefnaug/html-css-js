function f() {
    function add(a: number, b: number) {
        return a + b
    }
// add(1,2, 3)
// add(1)
    add(1, 2)

    let myFunc: (a:number, b:number) => number = add
    let myFunc2 = function(a:number, b:number): number {
        return a + b
    }

    /**
     * 接口定义函数
     */
    interface FuncDemo {
        (a:number, b:number): number
    }

    let myFunc3: FuncDemo = add

    /**
     * 可选参数 + 默认参数
     */
    function sum(a: number, b?: number, c: number = 10) {
        if (b) {
            return a + b + c
        }
        return a + c
    }

    /**
     * 剩余参数
     */
    function sum2(a: number, b: number, ...item: number[]) {
        if (item.length === 0) {
            return a + b
        }
        return a + b + item.length
    }

    console.log(sum2(1, 2, 3));
}

f()




