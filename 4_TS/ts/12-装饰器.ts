{
    class Animal {
        private readonly name: string
        constructor(name: string) {
            this.name = name
        }
        @preHandle
        sayHi() {
            console.log(this.name);
        }
    }

    function preHandle(originalMethod: Function, context: ClassMethodDecoratorContext): any {
        return function(...args: any[]) {
            console.log('preHandle');
            originalMethod.call(this, ...args);
        }
    }

    let animal: Animal = new Animal('Dog');
    animal.sayHi();

}