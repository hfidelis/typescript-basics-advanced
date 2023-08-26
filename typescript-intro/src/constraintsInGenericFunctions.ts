// Constraints reduzem o escopo de generic functions
// Limitamos os tipos utilizados no generic.

// Delimitando o generic <T> para ou numero ou string.
function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T
    // conversão para número usando o operador +
    if(+a > +b) {
        biggest = a
    } else {
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(5, 3))
console.log(biggestNumber(1200, 7))
console.log(biggestNumber("12", "5"))
console.log(biggestNumber("100", "100"))