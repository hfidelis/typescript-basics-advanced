"use strict";
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const shirt = {
    name: "camisa",
    price: 49.99
};
console.log(showProductDetails(shirt));
