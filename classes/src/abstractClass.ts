// Serve como molde para outras classes
// Todos os métodos devem ser implementados nas classes que herdam a mesma.
// Não instanciamos objetos a partir destas classes.

abstract class AbstractClass {
    abstract showName(): void;
}

class AbstractExample extends AbstractClass {
    name: string

    constructor(name: string) {
        super();
        this.name = name;
    }

    showName() {
        console.log(`O nome é ${this.name}`)
    }
}

const newAbstractObject = new AbstractExample("Josias")
newAbstractObject.showName()