// Pode trabalhar com argumentos especiais: target, propertyKey e descriptor;
// Trunfos do Decorator, pois nos dão informação do local em que ele foi executado.

function myDecorator() {

    console.log("Iniciando decorator!")
    // Princípio básico do Decorator -> retorno de uma função.
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        console.log("Executando decorator")
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)

    };
}

class myClass {
    @myDecorator()
    testing() {
        console.log("Terminando execução do método")
    }
}

const myObj: myClass = new myClass()
myObj.testing()