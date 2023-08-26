// Podemos criar um novo tipo
// Aceita dados do tipo objeto, como object literals e arrays
// Cria tipo baseado nas chaves do objeto.

type Character = {
    name: string,
    age: number,
    hasDriveLicense: boolean
}

type C = keyof Character

function showCharName(obj: Character, name: C): string {
    return `${obj[name]}`
}

const myChar: Character = {
    name: 'Heitor',
    age: 30,
    hasDriveLicense: true
}

console.log(showCharName(myChar, "name"))