"use strict";
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const heitorF = new Person("Heitor", "Fidelis");
console.log(heitorF.name, heitorF.surname);
console.log(heitorF.fullName);
