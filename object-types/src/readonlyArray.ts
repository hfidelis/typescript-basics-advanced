// Array com itens apenas readonly
// Pode definir os tipos dos itens
// Os itens podem ser modificados por métodos, mas o array não pode ser aumentado.

let myArray: ReadonlyArray<string> = ["maçã", "banana", "laranja", "abacaxi"]

// myArray[4] = "acerola" <- Não é possível
myArray.forEach(item => {
    console.log("fruta " + item)
})

myArray = myArray.map(item => {
    return `Fruta ${item}`
})

console.log(myArray)