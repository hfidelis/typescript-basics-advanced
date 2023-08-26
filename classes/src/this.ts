class Truck {
    model
    hp

    constructor(model: string, hp: number) {
        this.model = model
        this.hp = hp
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model} | Cavalos: ${this.hp} HP`)
    }
}

const volvo = new Truck("Volvo", 540)
const scania = new Truck("Scania", 540)

volvo.showDetails()
scania.showDetails()

