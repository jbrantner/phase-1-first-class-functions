function receivesAFunction(thing) {
    thing();
}

function runFiveMiles() {
    console.log("Go for a run!");
}

function returnsANamedFunction() {
    return runFiveMiles;
}

function returnsAnAnonymousFunction() {
   return function () {console.log("hello")}
}