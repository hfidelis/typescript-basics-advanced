// funções
function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(12, 12));

// Tipando os retornos da função.
function isCapitalized(nome: string): boolean {
    if (nome[0] === nome[0].toUpperCase()) {
        return true;
    }
    return false;
}
console.log(isCapitalized("Heitor"));
console.log(isCapitalized("heitor"));

// Void -> Uma função que não retorna nada.
function logger(msg: string): void {
    console.log(msg);
}
logger('Mensagem!');

// Parâmetro opcional
// Caso ele não seja tratado como no exemplo, o typescript não irá impedir a execução,
// Mas o seu retorno será como undefined.
function greeting(name: string, greet?: string): void {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    } else {
        console.log(`Olá ${name}`);
    }
}
greeting('Heitor', 'querido');
greeting("Fulano");