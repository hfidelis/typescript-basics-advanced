"use strict";
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3, 4, 5]));
console.log(firstElement(['a', 'b', 'c', 'd', 'e', true, 58]));
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const objeto1 = {
    name: 'Heitor',
    age: 19
};
const objeto2 = {
    job: 'Desenvolvedor',
    city: 'Jaboatão'
};
console.log(mergeObjects(objeto1, objeto2));
