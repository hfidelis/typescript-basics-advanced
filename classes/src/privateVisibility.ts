// Só acessados na classe que foram definidos,
// ainda assim precisa-se de métodos.

class PrivateClass {
    private name = "Private"

    showName() {
        return this.name
    }

    private privateMethod() {
        console.log("Método privado")
    }

    showPrivateMethod() {
        this.privateMethod()
    }
}

const pInstance = new PrivateClass()
pInstance.showPrivateMethod()

class TestingPrivate extends PrivateClass {
    myMethod() {
        //this.privateMethod() <- inalcançável
    }
}