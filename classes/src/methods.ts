class Dwarf {
    name: string

    constructor(name: string) {
        this.name = name
    }
    greeting() {
        console.log("Hey stranger!")
    }
}

const jimmy = new Dwarf("Jimmy")
console.log(jimmy.name)

jimmy.greeting()

console.log(jimmy)