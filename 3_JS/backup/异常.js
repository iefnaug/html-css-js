class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyErrorTest";
    }
}
try {
    let t = 1 / 0;
    if (t === Infinity) {
        throw new MyError("error occur")
    }
} catch (err) {
    console.error(err.name);
    console.error(err.message);
    console.error(err.stack);
} finally {
    console.log('finish');
}

