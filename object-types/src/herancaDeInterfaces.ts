// Extending Types = herança para criar tipos mais complexos
// Interface herdando propriedades e tipos definidos por outras
// usamos o extends.

interface Human {
    name: string,
    age: number
}

interface SuperHuman extends Human {
    superpowers: Array<string>
}

const heitor: Human = {
    name: "Heitor",
    age: 20
}

const goku: SuperHuman = {
    name: "Goku",
    age: 1200,
    superpowers: ["Kamehameha", "Genkydama"]
}