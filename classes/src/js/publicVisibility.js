"use strict";
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
const dIstance = new D();
console.log(cInstance.x);
console.log(dIstance.x);
