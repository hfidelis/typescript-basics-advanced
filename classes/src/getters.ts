// Método de leitura de propriedades.
// Podemos modificá-las neste retorno.

class Person {
    name
    surname

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }
    get fullName() {
        return this.name + " " + this.surname
    }
}

const heitorF = new Person("Heitor", "Fidelis")
console.log(heitorF.name, heitorF.surname)
// O getter é invocado como propriedade, não como função.
console.log(heitorF.fullName)