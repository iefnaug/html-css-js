function typeJudge(){
    interface Cat {
        name: string;
        run(): void;
    }
    interface Fish {
        name: string;
        swim(): void;
    }

    function isFish(animal: Cat | Fish) {
        /**
         * 类型断言只能欺骗编译器，不能改变运行时的类型
         */
        if (typeof (animal as Fish).swim === 'function') {
            return true;
        }
        return false;
    }
    let cat = {
        name: 'xm',
        run: function (){
            console.log('run');
        }
    }
    isFish(cat)

    /**
     * 将一个父类断言为更加具体的子类
     */
}
// typeJudge();


function classJudge() {

    class ApiError extends Error {
        code: number;
        constructor(message: string) {
            super(message);
            this.code = 1000;
        }
    }

    interface ApiError2 extends Error {
        code: number;
    }

    function isApiError(error: Error) {
        if (error instanceof ApiError) {
            console.log('api error', error.code);
        }
    }
}
// classJudge()


export function judge() {
    let a: number = 0;
    console.log((a as any).length)
}
judge()