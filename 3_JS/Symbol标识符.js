let s1 = Symbol("s1");
let s2 = Symbol("s1");
console.log(s1 === s2)
console.log(s1)
console.log(s1.description)

let obj = {}
obj[s1] = 'test1'
obj[s2] = 'test2'

let t1 = Symbol.for("v1")
let t2 = Symbol.for("v1")
console.log(t1 === t2)
console.log(Symbol.keyFor(t2))