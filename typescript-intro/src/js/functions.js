"use strict";
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function isCapitalized(nome) {
    if (nome[0] === nome[0].toUpperCase()) {
        return true;
    }
    return false;
}
console.log(isCapitalized("Heitor"));
console.log(isCapitalized("heitor"));
function logger(msg) {
    console.log(msg);
}
logger('Mensagem!');
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting('Heitor', 'querido');
greeting("Fulano");
