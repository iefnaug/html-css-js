{
    function createArr<T>(length: number, value: T): Array<T> {
        let res: T[] = [];
        for (let i = 0; i < length; i++) {
            res[i] = value;
        }
        return res;
    }

    let array = createArr<Number>(3, 1);
    console.log(array);

    function swap<R, T>(tuple: [R, T]): [T, R] {
        return [tuple[1], tuple[0]];
    }
}


{
    interface Lengthwise {
        length: number;
    }

    function showLength<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);
        return arg;
    }

    showLength({length: 10})
}

{
    /**
     * 泛型接口
     */
    interface Calculator<T> {
        (value: T): T
        (v1: T, v2: T): T
    }

    let cal: Calculator<number> = (a, b?: number) => {
        if (b) {
            return a * b;
        }
        return a * a
    }
    cal(10)

    interface Calculator2<T> {
        cal(v: T): T,
        cal2(v1: T, v2: T): T
    }

    let cal2: Calculator2<number> = {
        cal(v) {
            return v * v;
        },
        cal2(v1, v2) {
            return v1 * v2;
        }
    }
    cal2.cal(10);
    cal2.cal2(1, 3)
}