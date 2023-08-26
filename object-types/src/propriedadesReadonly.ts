// Forma de criar um valor constante em um objeto.
// O valor só será criado, e retorna erro pelo compilador se tentar ser trocado.

interface Car {
    brand: string,
    readonly wheels: number
}

const fusca: Car = {
    brand: 'VW',
    wheels: 4
}

console.log(fusca)