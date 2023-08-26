// Recurso para definir privacidade, nome tipo e propriedades;
// diretamente no constructor;

class ParametersProperties {
    constructor(public name: string, private qty: number, private price: number) {
        this.name = name;
        this.qty = qty;
        this.price = price;
    }

    get showQty() {
        return `Qtd total: ${this.qty}`
    }

    get showPrice() {
        return `Preço total: ${this.price}`
    }
}

const newShirt = new ParametersProperties("Camisa", 5, 19.99)
console.log(newShirt.name)
// console.log(newShirt.price)
// console.log(newShirt.qty)
console.log(newShirt.showPrice)
console.log(newShirt.showQty)