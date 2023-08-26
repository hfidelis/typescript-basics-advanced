"use strict";
function greeting2(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    const texto = f(userName);
    console.log(texto);
}
preGreeting(greeting2, 'Heitor');
