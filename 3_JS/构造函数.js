function User(name) {
    if (!new.target) {
        console.log("不是使用new创建")
        return new User(name);
    }
    this.name = name;
}

let u = User('scott')
console.log(u.name)
u = new User('joe')
console.log(u.name)

console.log(u.box?.width)
console.log(u.method?.())