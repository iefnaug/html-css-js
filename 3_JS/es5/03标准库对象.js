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


/**
 * String对象
 */
let str = 'abc'
let strWrapped = new String('abc')
console.log(typeof str) //string
console.log(typeof strWrapped) //object
console.log(strWrapped.toString(), strWrapped.valueOf())
for(let k in strWrapped) {
    console.log(k)
}

console.log(String.fromCharCode(104, 101, 108, 108, 111)) //hello，参数不能大于0xFFFF
console.log('abc'.charAt(1), 'abc'.charCodeAt(1))
console.log('abcde'.slice(1, 3)) //bc
console.log('abcc'.indexOf('c'), 'abcc'.lastIndexOf('c'))

let s = 'Abc'
console.log(s.toLocaleLowerCase(), s.toUpperCase())

s = 'cat, bat, sat, fat'
let regExpMatchArray = s.match('at');
console.log(regExpMatchArray)

s = 'a|b|c'
console.log(s.split('|'))


/**
 * Math对象
 * Math.E：常数e。
 * Math.LN2：2 的自然对数。
 * Math.LN10：10 的自然对数。
 * Math.LOG2E：以 2 为底的e的对数。
 * Math.LOG10E：以 10 为底的e的对数。
 * Math.PI：常数π。
 * Math.SQRT1_2：0.5 的平方根。
 * Math.SQRT2：2 的平方根。
 */
console.log(Math.abs(-123), Math.floor(12.6), Math.ceil(12.3))
console.log(Math.round(1.25), Math.random())

/**
 * Date对象
 */
let date = Date() //作为普通函数调用，返回string
console.log(date)
date = new Date(2025, 0, 1, 0, 0, 0, 0)
console.log(date.toString())
console.log(date.toUTCString())

date = Date.parse("2024-01-01T00:00:00.000") //返回number
console.log(date)


/**
 * 正则表达式
 * +?：表示某个模式出现1次或多次，匹配时采用非贪婪模式。
 * *?：表示某个模式出现0次或多次，匹配时采用非贪婪模式。
 * ??：表格某个模式出现0次或1次，匹配时采用非贪婪模式。
 */
let regex = /abc/i //编译时创建，效率高
regex = new RegExp('abc', 'igm') //执行时创建
console.log(regex.lastIndex, regex.source)
console.log(regex.ignoreCase)
console.log(regex.multiline)
console.log(regex.global)
console.log(regex.flags)

let reg = /x/g, target = 'x_x_x'
console.log(reg.lastIndex)
reg.test(target) //修改正则对象的属性, true false
console.log(reg.lastIndex, reg.source)
reg.test(target)
console.log(reg.lastIndex)

let r1 = /x./igm, rs = 'xa_xb_y_y'
console.log(r1.flags)
let regExpExecArray = r1.exec(rs);
console.log(regExpExecArray)
regExpExecArray = r1.exec(rs)
console.log(regExpExecArray)
regExpExecArray = r1.exec(rs)
console.log(regExpExecArray) //null
regExpExecArray = r1.exec(rs)
console.log(regExpExecArray) //回到开始


let r2 = /a.?/g
rs = 'abacad'
let regExpMatchArray1 = rs.match(r2);
console.log(regExpMatchArray1) //所有匹配的字符串
let number = rs.search(r2); //返回第一个匹配的位置，没有返回-1
console.log(number)

console.log('aaa'.replace('a', 'b')) // "baa"
console.log('aaa'.replace(/a/, 'b')) // "baa"
console.log('aaa'.replace(/a/g, 'b')) // "bbb"

let str_ = '  #id div.class  ';
console.log(str_.replace(/^\s+|\s+$/g, '')) //去除前置和后置空格


/**
 * JSON
 */
console.log('JSON-----------')
let jsonObj = {
    name: 'scott',
    age: 11
}
// console.log(JSON.stringify(jsonObj))
// console.log(JSON.stringify(jsonObj, null, 2)) //格式化
// console.log(JSON.stringify(jsonObj, ['name'])) //指定属性返回
let v = JSON.stringify(jsonObj, (k, v) => {
    if (k === "age") {
        return v * 2
    }
    if (k === 'name') {
        return undefined
    }
    return v
})
console.log(v)
let jsonStr = "{\"age\":22}\n"
console.log(JSON.parse(jsonStr))