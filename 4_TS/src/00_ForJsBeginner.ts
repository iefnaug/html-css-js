/**
 * union联合
 * 值联合
 * 类型联合
 */
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

const states: WindowStates = 'open'

function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}

/**
 * 泛型
 * type关键字定义类型
 */
type StringArray = Array<string>;
type NumberArray = Array<number>;
//限制数组里只能放置对象，并且对象必须有一个name属性, 带?的属性可选
type ObjectWithNameArray = Array<{ name: string, age?: number }>;

const sa: StringArray = ['1', '2', '3'];
const oa: ObjectWithNameArray = [{name: 'a', age: 1}, {name: 'b'}]

interface Backpack<T> {
    add: (obj: T) => void;
    get: () => T;
}
declare const backpack: Backpack<string>;
// const backpack: Backpack<string> = {
//     add: (obj: string) => {},
//     get: () => {
//         return '111111'
//     }
// }
// backpack.add('11')
// console.log(backpack.get());


/**
 * 类型匹配
 * 鸭子类型
 * If the object or class has all the required properties, TypeScript will say they match, regardless of the implementation details.
 */

interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}
//这里并没有将point定义为Point类型，ts会检查"形状"是否匹配
const point = { x: 12, y: 26 };
logPoint(point);
const rect = {x: 0, y: 0, z: 0};
logPoint(rect);

class VirtualPoint {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
const vp = new VirtualPoint(10, 20);
logPoint(vp)