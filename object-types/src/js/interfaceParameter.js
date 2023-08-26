"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é ${product.price}`);
    if (product.isAvaliable) {
        console.log(`O produto está disponível.`);
    }
}
const shirt = {
    name: 'Camisa Polo',
    price: 20.00,
    isAvaliable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 320.00, isAvaliable: false });
