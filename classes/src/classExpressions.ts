// Criar uma classe anônima
// Podemos tamber usar generics neste recurso
// Encapsulamos uma classe em uma variável

const myClass = class<T> {
    name: T

    constructor(name: T) {
        this.name = name
    }
}

const pessoa = new myClass("Fulano")
console.log(pessoa)
console.log(pessoa.name)