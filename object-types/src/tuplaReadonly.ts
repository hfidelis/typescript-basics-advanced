// restringido a tupla assim como no python
// tornando-a imutável, pois o dado não pode ser alterado
// Assim, será uma estrutura muito restrita com definição de tamanho, tipo e imutável

// Abordagem passando o tipo explicitamente como parâmetro, podemos fazer do modo
// tradicional igualmente.
type tupla = readonly [number, number]
function showNumbers(numbers: readonly [number, number]) {
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([15, 20])