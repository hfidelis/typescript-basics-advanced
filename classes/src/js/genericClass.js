"use strict";
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é ${this.first}`;
    }
}
const newItem = new Item("caixa", "surpresa");
console.log(newItem);
const secNewItem = new Item(12, true);
