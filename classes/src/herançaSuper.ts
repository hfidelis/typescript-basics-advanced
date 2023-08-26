class Machine {
    name: string

    constructor(name: string) {
        this.name = name
    }
}

const trator = new Machine("trator")

class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number) {
        super(name);
        this.guns = guns
    }
}

const destroyer = new KillerMachine("destroyer", 4)

console.log(trator)
console.log(destroyer)