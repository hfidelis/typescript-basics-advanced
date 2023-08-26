"use strict";
function doSomething2(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log(x ** 2);
    }
}
doSomething2("1");
