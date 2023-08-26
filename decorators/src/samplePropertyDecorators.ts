// Criando uma validação de um número máximo de caracteres
function MaxCharacters(limit: number) {
    return function (target: Object, propertyKey: string) {
        let value: string

        const getter = function () {
            return value
        }

        const setter = function (newVal: string) {
            if(newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} dígitos.`)
            } else {
                value = newVal
            }
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })

    }
}

class Admin {
    @MaxCharacters(10)
    username

    constructor(username: string) {
        this.username = username;
    }
}

const admzinho = new Admin('adminzinho12356')
console.log(admzinho.username)
const admin = new Admin('heitor')
console.log(admin.username)
