"use strict";
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
const myObj = {
    name: 'Porta',
    cor: 'Branca'
};
const otherObj = {
    name: 'carro',
    wheels: 4,
    engine: 1.0
};
console.log(showProductName(myObj));
console.log(showProductName(otherObj));
