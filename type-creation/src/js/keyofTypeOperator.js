"use strict";
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: 'Heitor',
    age: 30,
    hasDriveLicense: true
};
console.log(showCharName(myChar, "name"));
