/**
 * boolean类型
 */
let b:boolean = false;

/**
 * number类型
 */
let na:number = 0;
let nb:number = 0x11;
let nc:number = 0o11
let nd:number = NaN

/**
 * string类型
 */
let sa:string = 'bj'
let ne:number = 100
let sb:string = `hello, ${sa}, ${ne}`
console.log(sb);

/**
 * 空值
 */
let unusable:void = undefined

function print():void {
  console.log('no value returned');
}

/**
 * TS 默认开启 strictNullChecks: true（严格空值检查）
 * Null 和 Undefined
 * 与 void 的区别是，undefined 和 null 是所有类型的子类型
 */
let u:undefined = undefined
let n:null = null
let nf:number|null|undefined = n

/**
 * any类型
 */
let a:any = 1
a = 'hello'
a = false
