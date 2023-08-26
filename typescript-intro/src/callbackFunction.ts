// Passando uma função callback como parâmetro de uma função.
function greeting2(name: string): string {
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string): void {

    const texto : string = f(userName)
    console.log(texto)
}

preGreeting(greeting2, 'Heitor')