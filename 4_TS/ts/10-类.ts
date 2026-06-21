/**
 * ES6
 */
{
    class Animal {
        name
        constructor(name: string) {
            this.name = name;
        }
        sayHi() {
            console.log(this.name);
        }
    }

    let a = new Animal('Cat')
    a.sayHi()

    class Cat extends Animal {
        constructor(name: string) {
            super(name);
        }
        sayHi() {
            console.log(this.name);
            super.sayHi();
        }
        get hobby() {
            return 'Hobby';
        }

        set hobby(hobby: string) {
            console.log(hobby);
        }

        static isAnimal(name: string) {
            return name.startsWith('@');
        }
    }
    let c = new Cat('Cat');
    c.sayHi()
    c.name = 'Dog'
    c.hobby = 'ball'
    console.log(Cat.isAnimal('@cat'))
}

/**
 * TS
 */
{
    class Animal {
        private name: string;
        public constructor(name: string) {
            this.name = name;
        }
        public getName() {
            return this.name;
        }
    }
    let a = new Animal('Cat');
    console.log(a.getName());
}