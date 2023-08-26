"use strict";
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber(1200, 7));
console.log(biggestNumber("12", "5"));
console.log(biggestNumber("100", "100"));
