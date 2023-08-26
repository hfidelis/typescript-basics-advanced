// Semelhante ao method Decorator;
// Porém serve apenas para getters & setters;
// Altera a execução antes de um set ou get.

function enumerable2(value: boolean) {
    // Este Decorator pode definir um método como enumerable ou não dentro da classe.
    // Se passado false como valor, o método não será enumerable, ou seja, não será
    // listado quando a Classe for mostrada.
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value
    }
}

class Monster {
    name?;
    age?;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Neste caso, o mesmo decorator enumerable passado como true
    // altera o funcionamento dos getters e setters da Classe, e
    // ao mostrar a Classe, eles são listados como "propriedades"

    @enumerable2(true)
    get showName() {
        return `Nome do monstro : ${this.name}`
    }

    @enumerable2(true)
    get showAge() {
        return `Idade do monstro : ${this.age}`
    }
}

const charmander = new Monster('charmander', 12)
console.log(charmander)