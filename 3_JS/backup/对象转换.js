let user = {
    name: "John",
    money: 1000,
    // 对象到原始值的转换，是由许多期望以原始值作为值的内建函数和运算符自动调用的。
    // 这里有三种类型（hint）：
    // "string"（对于 alert 和其他需要字符串的操作）
    // "number"（对于数学运算）
    // "default"（少数运算符，通常对象以和 "number" 相同的方式实现 "default" 转换）
    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint === "string" ? `{name: "${this.name}"}` : this.money;
    },

    // 调用 obj[Symbol.toPrimitive](hint) 如果这个方法存在，
    // 否则，如果 hint 是 "string"
    // 尝试调用 obj.toString() 或 obj.valueOf()，无论哪个存在。
    // 否则，如果 hint 是 "number" 或者 "default"
    // 尝试调用 obj.valueOf() 或 obj.toString()，无论哪个存在。

    // valueOf() {
    //     return this.money
    // },
    // toString() {
    //     return this.name
    // }
};

// 转换演示：
console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500