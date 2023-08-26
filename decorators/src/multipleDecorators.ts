// Podemos utilizar múltiplos decorators em TS
// O primeiro a ser executado é o que está mais abaixo do código.

function a() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Executou A.")
    }
}

function b() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Executou B.")
    }
}

function c() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Executou C.")
    }
}

class MultipleDecorators {
    @c()
    @a()
    @b()
    testing() {
        console.log("Terminando execução.")
    }
}

const multiple = new MultipleDecorators()
multiple.testing()