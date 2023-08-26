// Cria um tipo baseado em uma chave.
// Conseguimos reaproveitar o tipo para outros locais, como funções

type Truck = {
    km: number,
    kg: number,
    description: string
}

type Km = Truck['km'] // Resultado = number

const newTruck: Truck = {
    km: 120000,
    kg: 5000,
    description: "Scania qualificada"
}

const newCar = {
    km: 300000,
    kg: 1000
}

function showKm(km: Km){
    console.log(`O veículo tem a km de: ${km}`)
}

// é mais flexível que o keyof, pois generaliza mais o argumento. Enquanto o anterior prende ao tipo criado.
showKm(newTruck.km)
showKm(newCar.km)