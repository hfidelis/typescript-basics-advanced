// itens protected só acessados em subclasses.
// Propriedades só são acessadas por métodos

class E {
    protected x = 10;

    protected protectedMethod() {
        console.log("Método protegido")
    }
}

class F extends E {
    showX() {
        console.log("X:", this.x)
    }
    showProtectedMethod() {
        this.protectedMethod()
    }
}

const fInstance = new F()
// console.log(fInstance.x) <- Erro
fInstance.showX()
fInstance.showProtectedMethod()