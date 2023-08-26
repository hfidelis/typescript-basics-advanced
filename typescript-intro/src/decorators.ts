// Decorators
// para usar, descomentamos no tsconfig.json o atributo "experimentalDecorators"
// Decorator que implementa data de criação e id ao criar um objeto.

// constructor Decorator
// Insere as propriedades dentro de qualquer instância de qualquer Classe, para isso usamos um generic complexo.
// Onde um array de qualquer argumentos é transformado de object literal, e esse array é o constructor passado como
// parâmetro, após isso, retornamos a classe extends o constructor do parâmetro, com os nossos novos 2 atributos.
function BaseParameters() {
    return function <T extends {new (...args: any[]): {}}>(constructor: T) : any {
        return class extends constructor {
            id: number = Math.random();
            createdAt: Date = new Date();
        }
    }
}

@BaseParameters()
class Person {
    name;

    constructor(name: string) {
        this.name = name;
    }
}

const sam = new Person("Sam")
console.log(sam)

// Symbols - Diferencia valores, mesmo que sejam iguais.
const tipoA1: symbol = Symbol("a")
const tipoA2: symbol = Symbol("a")
console.log(tipoA1 == tipoA2)
console.log(tipoA1 === tipoA2)