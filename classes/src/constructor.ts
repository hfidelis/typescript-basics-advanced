class NewUser {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const fulano = new NewUser('Fulano', 20)
console.log(fulano)