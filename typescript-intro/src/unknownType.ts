// Semelhante ao any, aceita qualquer tipo de dado
// Porém nãod eixa algo ser executado se não houver validação do tipo.
// Uma trava de segurança!

function doSomething2(x: unknown) {
    if(Array.isArray(x)) { // console.log(x[0]) Erro, pois n sabe se é um Array.
        console.log(x[0])
    } else if(typeof x === "number") {
        console.log(x**2)
    }
}

doSomething2("1")