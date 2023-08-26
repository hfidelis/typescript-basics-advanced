// Interfaces, criam um padrão que pode ser reutilizado como tipo.

interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams): number {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({n1: 1, n2: 2}));

function multiplyNumbers(nums: MathFunctionParams): number {
    return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10
}

console.log(multiplyNumbers(someNumbers));