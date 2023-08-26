// tipo semelhante ao void
// Utilizado quando a função não retorna nada
// Exemplo: retorno de erros.

function showErrorMessage(msg: string): never {
    throw new Error(msg)
}

showErrorMessage("Algum erro!")