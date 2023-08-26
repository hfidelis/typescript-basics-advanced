"use strict";
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
    }
    else {
        console.log(`Não foi passado um número`);
    }
}
doSomething(5);
doSomething(false);
class Usuario {
    constructor(name) {
        this.name = name;
    }
}
class SuperUsuario extends Usuario {
    constructor(name) {
        super(name);
    }
}
const zezinho = new Usuario('Zezinho');
const zezao = new SuperUsuario('Zezao');
function cumprimentarUsuario(user) {
    if (user instanceof SuperUsuario) {
        console.log(`Olá senhor usuário ${user.name}!`);
    }
    else if (user instanceof Usuario) {
        console.log(`Olá usuário ${user.name}!`);
    }
}
cumprimentarUsuario(zezinho);
cumprimentarUsuario(zezao);
class Cachorro {
    constructor(nome, raca) {
        this.nome = nome;
        if (raca) {
            this.raca = raca;
        }
    }
}
function detalhesCachorro(dog) {
    if (dog.raca) {
        console.log(`O cachorro ${dog.nome} é da raça ${dog.raca}.`);
    }
    else {
        console.log(`O cachorro ${dog.nome} é um vira-lata.`);
    }
}
const viraLata = new Cachorro('Fofuro');
const pitbull = new Cachorro('Thor', 'Pit bull');
detalhesCachorro(viraLata);
detalhesCachorro(pitbull);
