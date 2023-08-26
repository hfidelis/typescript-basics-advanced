// Setters modificam propriedades
// Podemos fazer validações antes de inserir uma propriedade.
// Setters também funcionam como métodos.

class Coords {

    x!: number
    y!: number

    set fillX(x: number) {
        if (x === 0) {
            return
        }

        this.x = x
        console.log("X inserido com sucesso")
    }

    set fillY(y: number) {
        if (y === 0) {
            return
        }

        this.y = y
        console.log("X inserido com sucesso")
    }

    get getCoords() {
        return `X: ${this.x} Y: ${this.y}`
    }
}

const myCoords = new Coords()
myCoords.fillX = 15
myCoords.fillY = 0


console.log(myCoords)
console.log(myCoords.getCoords)