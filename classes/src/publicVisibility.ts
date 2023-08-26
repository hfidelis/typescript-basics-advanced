// modo default de visibilidade
// já é implícito, não precisa se declarar.

class C {
    public x = 10
}

class D extends C {

}

const cInstance = new C()
const dIstance = new D()
console.log(cInstance.x)
console.log(dIstance.x)