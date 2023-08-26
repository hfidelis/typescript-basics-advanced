// Decorator que pode modificar a execução de métodos;
// Precisamos inserir o decorator antes da declaração do método;
// Ele é executado antes do método.
function enumerable(value: boolean) {
    // Este Decorator pode definir um método como enumerable ou não dentro da classe.
    // Se passado false como valor, o método não será enumerable, ou seja, não será
    // listado quando a Classe for mostrada.
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value
    }
}

class Machine {
    name: string

    constructor(name: string) {
        this.name = name
    }

    @enumerable(false)
    showName() {
        console.log(this)
        return `O nome da máquina é ${this.name}`
    }
}

const scania = new Machine('Caminhão');

console.log(scania.showName())