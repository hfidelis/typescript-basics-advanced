// importando arquivos
import importGreet from "./greet";

importGreet();

// importando variáveis

import { x } from "./variable";

console.log(x);

// múltiplas importações
import {a, b, myFunction} from "./multiple";
console.log(a);
console.log(b);
myFunction();

// Alias

import { someName as name } from "./alias";
console.log(name)

// Importando tudo
import * as myNumbers from "./numbers";
console.log(myNumbers)
const nx = myNumbers.n1;
const ny = myNumbers.n2;
const nz = myNumbers.n3;
console.log(nx + ny + nz)
console.log(myNumbers.n1 + myNumbers.n2 + myNumbers.n3)

// importando tipos

import {Human} from "./myType"
class User implements Human {
    name
    age

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
}

const joao = new User("João", 28)
console.log(joao)