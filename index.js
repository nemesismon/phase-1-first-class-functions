function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function theNamedFunction(){}
};

function returnsAnAnonymousFunction() {
    return function () {};
}