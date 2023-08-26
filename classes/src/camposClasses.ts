// Usamos ! após o atributo, quando ele não é inicializado.
class User {
    name!: string
    age!: number
}

const heitor = new User()
console.log(heitor)

heitor.name = 'Heitor'
heitor.age = 20

console.log(heitor)