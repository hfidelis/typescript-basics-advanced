// Intersection Types são utilizados para criar tipos complexos
// a partir de duas interfaces, concatenando os tipos com o operador lógico &.

interface Character {
    name: string
}

interface Gun {
    type: string,
    caliber: number
}

type HumanWithGun = Character & Gun

const rambo: HumanWithGun = {
    name: 'Rambo',
    type: 'Machine Gun',
    caliber: 45
}

console.log(rambo)