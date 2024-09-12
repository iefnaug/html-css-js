let map = new Map();
map.set('1', 'str1');   // 字符串键
map.set(1, 'num1');     // 数字键
map.set(true, 'bool1'); // 布尔值键
// console.log(map.get('1'));
// console.log(map.get(1));
// console.log(map.get(true));
// console.log(map.size);
for(let key of map.keys()) {
    console.log(key)
}
for(let value of map.values()) {
    console.log(value)
}
for(let entry of map.entries()) {
    console.log(entry[0], entry[1]);
}