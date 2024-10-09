function throwError(err) {
    throw new err('some thing went wrong!');
}

function catchError(error) {
    try {
        throwError(error);
    } catch (e) {
        console.log(e.name, e.message, e.stack);
    } finally {
        console.log('end!')
    }
}

// catchError()

function UserError(message) {
    this.message = message || '默认信息';
    this.name = 'UserError';
}

UserError.prototype = new Error();
UserError.prototype.constructor = UserError;

catchError(UserError);