function interfaceDemo(): void {

    interface Person {
        name: string
        age: number
        hobby?: string
    }

    let p: Person = {
        name: '张三',
        age: 18,
        hobby: 'aa'
    }

    interface Person2 {
        //只读属性，不能被修改值，必须在初始化时赋值
        readonly id: number;
        name: string;
        age?: number;
        //索引签名，属性是任意字符串，值是任意类型
        [propName: string]: any;
    }
    let tom: Person2 = {
        id: 1001,
        name: 'Tom',
        age: 25,
        gender: 'male'
    };
}
