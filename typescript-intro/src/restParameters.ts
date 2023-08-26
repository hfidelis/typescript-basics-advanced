// Em JS usamos o Rest Operator
// em JS é só definir o tipo de dado com a sintaxe do rest (...)

function sumAll(...n: number[]) {
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(10, 10, 20))
// console.log(sumAll('teste', 'oi')) -> Erro, pois não são números.