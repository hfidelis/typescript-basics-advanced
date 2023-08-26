// Classes com tipos genéricos
// Propriedades dos argumentos podem ter tipos definidos na hora da criação da instância

class Item<T, U> {
    first: T
    second: U

    constructor(first: T, second: U) {
        this.first = first
        this.second = second
    }

    get showFirst() {
        return `O first é ${this.first}`
    }
}

const newItem = new Item("caixa", "surpresa")
console.log(newItem)

const secNewItem = new Item(12, true)