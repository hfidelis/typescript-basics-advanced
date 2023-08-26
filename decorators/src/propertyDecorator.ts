// Utilizado nas propriedades de uma classe;
// Na hora da definição das mesmas, ativamos uma função;
// Isso nos ajuda a modificar ou validar algum valor.

function formatIdNumber() {
    return function (target: Object, propertyKey: string) {
        let value: string

        const getter = function () {
            return value
        }

        const setter = function (newVal: string) {
            value = newVal.padStart(5, "0");
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        })

    }
}

class ID {
    @formatIdNumber()
    id

    constructor(id: string) {
        this.id = id
    }
}

const newItem = new ID("1")
console.log(newItem)