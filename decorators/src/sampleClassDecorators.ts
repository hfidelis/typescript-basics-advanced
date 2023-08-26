// Exemplo real;
// Inserindo createdAt em objetos.
function createdDate(created: Function) {
    created.prototype.createdAt = new Date();
}

@createdDate
class Book {
    id;
    createdAt?: Date;

    constructor(id: number) {
        this.id = id;
    }
}

@createdDate
class Pen {
    id;
    createdAt?: Date;
    constructor(id: number) {
        this.id = id;
    }
}

const newBook = new Book(12);
const newPen = new Pen(55);

console.log(newBook.createdAt)
console.log(newPen.createdAt)