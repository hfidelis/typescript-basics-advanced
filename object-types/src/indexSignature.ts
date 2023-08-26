// Utilizamos quando não sabemos o nome das chaves, mas sabemos os tipos de um
// objeto ou array.
// Restringe os tipos que não devem ser utilizados.

interface CoordObject {
    [index: string]: number
}
// Define que a propriedade index deve ser escrita por string, e o valor como número.

let coords: CoordObject = {
    x: 10
}
// Podemos adicionar novas variáveis seguindo a regra da interface.
coords.y = 15

console.log(coords)