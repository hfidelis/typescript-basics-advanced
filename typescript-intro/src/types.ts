// Definimos rootDir e outDir no tsconfig.json...
let x: number = 10;
x = 1090;
console.log(x);

// Inferência x Annotation : Definição de tipos.
let y = 12;
// y = "teste" : Erro, pois foi definido automaticamente por inferência
let z: number = 12; // Annotation

// Tipos básicos
let firstName: string = 'Heitor';
let age: number = 20;
let isAdmin: boolean = true;

// object
const myNumbers: number[] = [1, 2, 3]; // Array numérico
const myNumbers2: Array<number> = [2, 4, 6] // Outra forma de declarar
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5);
console.log(myNumbers);

// tuplas
let myTuple: [number, string, string[]];
myTuple = [5, 'a', ['b', 'c', 'd']];

// object literals -> {prop: value}
const user: {name: string, age: number} = {
    name: "Heitor",
    age: 20
};
console.log(user);
console.log(user.name, user.age);

// user.job = "Programador" inválido.

// any -> específico, usado sem necessidade é uma má prática.
let a: any = 0;
a = "teste";
a = true;
a = [];

// union type -> Unindo tipos para formar um tipo complexo
let id: string | number = "10";
id = 200;
// id = true -> inválido

// type alias -> Determinando o nome de um tipo.
type myIdType = number | string;
let userId: myIdType = 10;
userId = "ABD";
const productId: myIdType = 'QWERTY';

// enum -> Tipo de dado, enumera uma coleção.
// Tamanho de roupas (size: Médio, size: Pequeno, size: Grande, etc..)
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
};

const camisa: {name: string, size: Size} = {
    name: "Camisa gola V",
    size: Size.G, // Grande
};
console.log(camisa);

// literal types -> determinando um valor como um tipo
let teste: "autenticado" | null;
// teste = "outrovalor"
teste = "autenticado";
teste = null;