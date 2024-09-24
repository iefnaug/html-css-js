/**
 * 值 as 类型
 * 或
 * <类型>值
 */
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}
function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}
let cat: Cat = {
    name: 'ss',
    run() {
        console.log('cat run')
    }
}
console.log(isFish(cat));