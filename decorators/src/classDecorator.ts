// Class decorators estão ligados ao constructor;
// Ou seja, sempre que este for executado, teremos a execução do decorator;
// Ou seja, na execução do 'new'

// Precisamos sinalizar que receberemos um constructor como arg, e tipado como function.
function classDec(constructor: Function) {
    // Constructor.name -> Nome da classe
    // Ex: Checando se a classe onde o dec foi aplicada é
    // a classe User.
    console.log(constructor.name)
    if(constructor.name === 'User') {
        console.log("Criando usuário!");
    }
}

@classDec
class User {
    name: string

    constructor(name: string) {
        this.name = name
    }
}

const heitor = new User('Heitor')
console.log(heitor)