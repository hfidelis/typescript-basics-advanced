class Car {
    name
    readonly wheels = 4

    constructor(name: string) {
        this.name = name
    }
}

const fusca = new Car("Fusca")

console.log(fusca)
console.log(fusca.wheels)
console.log(fusca.name)
// fusca.wheels = 5 <- Não pode