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

// funções
function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(12, 12));

// Tipando os retornos da função.
function isCapitalized(nome: string): boolean {
    if (nome[0] === nome[0].toUpperCase()) {
        return true;
    }
    return false;
}
console.log(isCapitalized("Heitor"));
console.log(isCapitalized("heitor"));

// Void -> Uma função que não retorna nada.
function logger(msg: string): void {
    console.log(msg);
}
logger('Mensagem!');

// Parâmetro opcional
// Caso ele não seja tratado como no exemplo, o typescript não irá impedir a execução,
// Mas o seu retorno será como undefined.
function greeting(name: string, greet?: string): void {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    } else {
        console.log(`Olá ${name}`);
    }
}
greeting('Heitor', 'querido');
greeting("Fulano");

// Interfaces, criam um padrão que pode ser reutilizado como tipo.

interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams): number {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({n1: 1, n2: 2}));

function multiplyNumbers(nums: MathFunctionParams): number {
    return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10
}

console.log(multiplyNumbers(someNumbers));

// Narrowing - Recurso mais teórico
// Checagem de tipos.
function doSomething(info: number | boolean) {
    if(typeof info === "number") {
        console.log(`O número é ${info}`);
    } else {
        console.log(`Não foi passado um número`);
    }
}

doSomething(5);
doSomething(false);

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

// Classes
// Constumamos declarar os tipos no constructor, e declarar as classes antes.
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUsername(): void {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow: boolean): void {
        if (canShow) {
            console.log(`O cargo do usuário ${this.name} é ${this.role}`);
        } else {
            console.log(`Informação restrita`);
        }
    }
}

const zeca = new User('Zeca', 'Admin', true);
console.log(zeca);
zeca.showUsername();
zeca.showUserRole(true);
zeca.showUserRole(false);

// Interfaces em Classes
interface IVehicle {
    brand: string;
    showBrand(): void;
}
// Se não declararmos as heranças da interface (atributos e funções), o ts irá informar erro.
class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}

const fusca = new Car("VW", 4);
fusca.showBrand();

// Herança
// Ao extender a classe, ela herda todos os atributos/funções da classe pai,
// sendo apenas necessário a declaração delas no constructor e no super.
// As novas, precisamos atribuir com o this no modelo padrão.
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi", 4, 2.0)
console.log(a4)
a4.showBrand()

// Decorators
// para usar, descomentamos no tsconfig.json o atributo "experimentalDecorators"
// Decorator que implementa data de criação e id ao criar um objeto.

// constructor Decorator
// Insere as propriedades dentro de qualquer instância de qualquer Classe, para isso usamos um generic complexo.
// Onde um array de qualquer argumentos é transformado de object literal, e esse array é o constructor passado como
// parâmetro, após isso, retornamos a classe extends o constructor do parâmetro, com os nossos novos 2 atributos.
function BaseParameters() {
    return function <T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id: number = Math.random();
            createdAt: Date = new Date();
        }
    }
}

@BaseParameters()
class Person {
    name;

    constructor(name: string) {
        this.name = name;
    }
}

const sam = new Person("Sam")
console.log(sam)

// Symbols - Diferencia valores, mesmo que sejam iguais.
const tipoA1: symbol = Symbol("a")
const tipoA2: symbol = Symbol("a")
console.log(tipoA1 == tipoA2)
console.log(tipoA1 === tipoA2)