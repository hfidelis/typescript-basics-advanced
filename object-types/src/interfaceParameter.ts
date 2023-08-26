// Simplificar parâmetros de objetos de funções;
// Em vez de passar parâmetros de objetos longos para N funções, passamos apenas a interface.

interface Product {
    name: string,
    price: number,
    isAvaliable: boolean
}
// function showProductDetails(name: string, price: number, isAvaliable: boolean)...
function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é ${product.price}`)
    if(product.isAvaliable) {
        console.log(`O produto está disponível.`)
    }
}

const shirt: Product = {
    name: 'Camisa Polo',
    price: 20.00,
    isAvaliable: true
}

showProductDetails(shirt)
showProductDetails({name: "Tênis", price: 320.00, isAvaliable: false})