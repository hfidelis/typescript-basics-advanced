// Em generic functions utilizamos parâmetros de tipos semelhantes, se não recebemos erro.
// Porém conseguimos determinar o tipo dos parâmetros aceitos com uma sintaxe especial.

function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}

// manipulando o generic na hora da execução, para aceitar 2 tipos diferentes.
console.log(mergeArrays<number | string>([1,2,3], ['a','b','c']))