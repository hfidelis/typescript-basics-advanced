// generics
// Definindo uma função que recebe um array com qualquer tipo de dados, começamos um generic abrindo < >
// e inserindo T (Poderia ser outro label), e após isso indicamos que o array é um genérico como T na frente.
// Nesse caso, a função irá tratar qualquer tipo dentro desse Array.
function showArrayItems<T>(arr: T[]) {
    arr.forEach((item: T) : void => {
        console.log(`Item: ${item}`);
    })
}

const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
showArrayItems(a1);
showArrayItems(a2);