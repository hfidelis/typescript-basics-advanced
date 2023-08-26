// usamos quando uma função pode aceitar mais de um tipo:
// Prática mais interessante do que o any, com efeito semelhante

function showData<T>(arg: T) : string {
    return `O dado é ${arg}`
}

console.log(showData(5))
console.log(showData('testando generic'))