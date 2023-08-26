// Estratégia para quando o retorno é relacionado ao tipo do argumento.
// generics geralmente usados por T ou T por convenção.

// Definindo o argumento como um array de itens de qualquer tipo, usando o generics. <T>
function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([1, 2, 3, 4, 5]))
console.log(firstElement(['a', 'b', 'c', 'd', 'e', true, 58]))


// Usando 2 generics para definir 2 argumentos de objetos de formatos qualquer, usando <T> e <U>
function mergeObjects<T, U>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2
    }
}

const objeto1: {name: string, age: number} = {
    name: 'Heitor',
    age: 19
}

const objeto2: {job: string, city: string} = {
    job: 'Desenvolvedor',
    city: 'Jaboatão'
}

console.log(mergeObjects(objeto1, objeto2))