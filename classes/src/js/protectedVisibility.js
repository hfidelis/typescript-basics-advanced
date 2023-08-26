"use strict";
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log("Método protegido");
    }
}
class F extends E {
    showX() {
        console.log("X:", this.x);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
