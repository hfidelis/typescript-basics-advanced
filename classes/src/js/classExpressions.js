"use strict";
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Fulano");
console.log(pessoa);
console.log(pessoa.name);
