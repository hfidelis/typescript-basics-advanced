"use strict";
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Método privado");
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pInstance = new PrivateClass();
pInstance.showPrivateMethod();
class TestingPrivate extends PrivateClass {
    myMethod() {
    }
}
