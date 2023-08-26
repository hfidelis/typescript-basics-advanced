// propriedades e métodos em classes;
// Faz com que o acesso ou a utilização não dependam de objetos;
// Podemos utilizá-los a partir da própria classe.

class StaticMembers {
    static prop = "Teste static"

    static staticMethod() {
        console.log("Esté é um método estático")
    }
}

console.log(StaticMembers.prop)
StaticMembers.staticMethod()