"use strict";
const newTruck = {
    km: 120000,
    kg: 5000,
    description: "Scania qualificada"
};
const newCar = {
    km: 300000,
    kg: 1000
};
function showKm(km) {
    console.log(`O veículo tem a km de: ${km}`);
}
showKm(newTruck.km);
showKm(newCar.km);
