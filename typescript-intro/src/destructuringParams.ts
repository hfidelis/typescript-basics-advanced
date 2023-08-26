// Destructuring como parâmetro
// Apenas precisa determinar o tipo de dado que será desestruturado.

// Precisamos definir que o parâmetro é um objeto com atributos {name, price} porém usamos o destructuring
// definindo os tipos, no caso: {name, price}: {name: string, price: number}
function showProductDetails({name, price}: {name: string, price: number}): string {
    return `O nome do produto é ${name} e ele custa R$${price}`
}

const shirt = {
    name: "camisa",
    price: 49.99
}

console.log(showProductDetails(shirt))