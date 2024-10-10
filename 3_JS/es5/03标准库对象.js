/**
 * Object对象
 * Object(value)与new Object(value)两者的语义是不同的，Object(value)表示将value转成一个对象，new Object(value)则表示新生成一个对象，它的值是value。
 */
let a = ['Hello', 'World'];

//下面两个方法都返回自身的属性
console.log(Object.keys(a)) // ["0", "1"]
console.log(Object.getOwnPropertyNames(a)) // ["0", "1", "length"] 多返回了不可枚举的属性length

let obj = {}
console.log(obj.toString())

/**
 * 属性描述对象
 * {
 *   value: 123,
 *   writable: false,
 *   enumerable: true,
 *   configurable: false,
 *   get: undefined,
 *   set: undefined
 * }
 */
let obj2 = {p: 'a'}
let descriptor = Object.getOwnPropertyDescriptor(obj2, 'p'); //{ value: 'a', writable: true, enumerable: true, configurable: true }
console.log(descriptor)

//单个
let obj3 = Object.defineProperty({}, 'p', {
    value: 123,
    writable: false,
    enumerable: true,
    configurable: false
});
//多个
let obj4 = Object.defineProperties({}, {
    p1: { value: 123, enumerable: true },
    p2: { value: 'abc', enumerable: true },
    p3: { get: function () { return this.p1 + this.p2 },
        enumerable:true,
        configurable:true
    }
});
//get set
let obj5 = {
    $v: 10,
    get v() {
        console.log('call get')
        return this.$v;
    },
    set v(val) {
        console.log('call set')
        this.$v = val;
    }
}
obj5.v = 20
console.log(obj5.v);


/**
 * Array
 */
 let arr = [1,2,3]
console.log(Array.isArray(arr))
console.log(arr.valueOf())
console.log(arr.toString())
arr.push(4) //从右边插入
arr.push(5,6)
console.log(arr.toString())
console.log(arr.pop()); //从右边删除
arr.unshift(-1, 0) //从左边插入
console.log(arr.toString())
console.log(arr.shift()) //从左边删除

console.log(arr.join('-'))
console.log(Array.prototype.join.call(arr, '-')) //类数组

console.log(arr.concat([100,200]))

console.log(arr.reverse()) //需要修改原始值，字符串不能借用
console.log(arr)

console.log(arr.slice(1, 2)) //提取部分，原数组不变
console.log(Array.prototype.slice.call('hello', 1, 2)) //e

let arr2 = [1,2,3,4,5,6]
arr2.splice(2, 2, 10, 20) //删除从位置2开始的2个元素，并添加10和20两个元素，更改原数组  [ 1, 2, 10, 20, 5, 6 ]
console.log(arr2)

let arr5 = [11,101,3,4,8,7,6,5]
console.log(arr5.sort().toString()) //默认按字典排序
console.log(arr5.sort((a, b) => b - a))

let arr6 = [1,3,5,7]
console.log(arr6.map((currentElement, index, arrSelf) => currentElement * 2).toString());

let arr7 = [1,3,5,7]
arr7.forEach((currentElement, index, arrSelf) => console.log(currentElement, index))

let arr8 = [1,3,5,7]
console.log(arr8.filter((currentElement, index, arrSelf) => currentElement > 4))

let arr9 = [1,3,5,7]
console.log(arr9.some((currentElement, index, arrSelf) => currentElement > 5)) //其中一个满足条件true
console.log(arr9.every((currentElement, index, arrSelf) => currentElement > 5)) //所有满足条件返回true

let ar = [1,3,5,7]
let sum = ar.reduce(function (pre, cur, index, arrSelf) {
    console.log('pre=%d, cur=%d', pre, cur)
    return pre + cur;
}, -1)
console.log(sum)

let ar2 = [1,3,5,7]
console.log(ar2.indexOf(3))
console.log(Array.prototype.indexOf.call('hello', 'e'))


/**
 * 包装对象
 */
let n = 123
let n2 = new Number('123') //对象
let n3 = Number('123') //原始类型
console.log(n === n2)
console.log(n === n3)
console.log(typeof n2) //object
console.log(typeof n3) //number

/**
 * Boolean对象
 * Boolean(undefined) // false
 * Boolean(null) // false
 * Boolean(0) // false
 * Boolean('') // false
 * Boolean(NaN) // false
 *
 * Boolean(1) // true
 * Boolean('false') // true
 * Boolean([]) // true
 * Boolean({}) // true
 * Boolean(function () {}) // true
 * Boolean(/foo/) // true
 */
if (Boolean(false)) {
    console.log('true');
} // 无输出

if (new Boolean(false)) {
    console.log('true');
} // true

if (Boolean(null)) {
    console.log('true');
} // 无输出

if (new Boolean(null)) {
    console.log('true');
} // true


/**
 * Number对象
 */
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
let num = 100
console.log(num.toString())
console.log(num.toString(2))
console.log(num.toString(8))
console.log(num.toString(16))

num = 123.456
// num = 0.123456
console.log(num.toFixed(2)) //保留n位小数
console.log(num.toExponential(3)) //科学计数法，小数点后保留n位
console.log(num.toPrecision(4)) //保留n位有效数字

console.log((123.66).toLocaleString('zh-Hans-CN', { style: 'currency', currency: 'CNY' }))