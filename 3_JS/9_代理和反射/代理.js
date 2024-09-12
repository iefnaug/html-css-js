const target = {
    name: 'scott',
    sayHi() {
        console.log("hi");
    }
}

const handler = {
    //获取属性值会触发
    //目标对象，目标属性，代理对象
    get(target, targetProperty, receiver) {
        // console.log(target, targetProperty, receiver);
        if (targetProperty === 'name') {
            return target[targetProperty] + '!!!';
        }
        return target[targetProperty];
        // return receiver[targetProperty]; //递归调用了
    }
}
const handler2 = {
    get: Reflect.get
}

let proxy = new Proxy(target, handler);
proxy.name = 'joy';
console.log(proxy.name);
proxy.sayHi();