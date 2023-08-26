// Permite criar tipos com base em if/elses:
// Utilizamos o ternário.

interface A {

}

interface B extends A {

}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string

const someVar: myType = 15
// const someVar2: myType = 'teste' <- Erro

type myTypeB = Teste extends {showNumber(): number} ? string : boolean

const someVar2: myTypeB = false
// const someVar2: myTypeB = 'string' <- false