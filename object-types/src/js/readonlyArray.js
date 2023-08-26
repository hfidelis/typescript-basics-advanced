"use strict";
let myArray = ["maçã", "banana", "laranja", "abacaxi"];
myArray.forEach(item => {
    console.log("fruta " + item);
});
myArray = myArray.map(item => {
    return `Fruta ${item}`;
});
console.log(myArray);
