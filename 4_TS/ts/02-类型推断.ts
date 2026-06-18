/**
 * 一开始没有指定类型，TS 会根据赋值推断类型
 */
// let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;

/**
 * myFavoriteNumber一开始没有指定类型，TS 会根据赋值推断类型为any
 */
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;