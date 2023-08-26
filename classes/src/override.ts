// Substitui o método de uma classe que herdamos algo
// Basta criar o método com o mesmo nome na classe filha

class Base {
    someMethod() {
        console.log("Alguma coisa")
    }
}

class Nova extends Base {
    someMethod() {
        console.log("Testando outra coisa")
    }
}

const myObject = new Nova()
myObject.someMethod()