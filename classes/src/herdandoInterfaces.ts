// Usa-se o implements
// Forma mais utilizado para criar métodos que várias classes terão em comum.

interface showTitle {
    itemTitle(): string
}

class blogPost implements showTitle {

    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle(): string {
        return `O título do post é ${this.title}`
    }
}

const myPost = new blogPost("Hello World")
console.log(myPost.itemTitle())

class TestingInterface implements showTitle {
    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle(): string {
        return `O título é ${this.title}`
    }
}