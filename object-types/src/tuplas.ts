// Tuplas
// Definimos quantidade e tipo dos elementos.
// Criamos um type, e inserimos um array com os tipos.
// Cada tipo conta como um elemento.

type fiveNumbers = [number, number, number, number, number]

const tuplaDeNumeros: fiveNumbers = [5, 6, 10, 15, 20]
// const tuplaDeNumeros2: fiveNumbners = [5, 6, 10, 15, 20, 21] <- Erro

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["Heitor", 20]
// anotherUser[0] = 1
anotherUser[0] = 'Heitorzinho'