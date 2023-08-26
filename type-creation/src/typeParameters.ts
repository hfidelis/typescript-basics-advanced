// Recurso do generics
// Cria uma ligação entre tipo genérico e chave.
// Diz que a chave de um objeto é parâmetro de função.

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))