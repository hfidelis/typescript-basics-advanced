// Com interfaces criamos tipos complexos,
// usando generics, deixamos elas mais brandas, genéricas.
// Criamos uma interface, definindo tipos genéricos nela,
// após isso, conseguimos criar tipos usando ela como molde,
// definindo um tipo para cada Generic.
interface MyObject<T, U, V> {
    name: string
    wheels: T
    engine: U
    color: V
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const meuCarro: Car = {
    name: 'fusca',
    wheels: 4,
    engine: 1.0,
    color: 'branca'
}

const minhaCaneta: Pen = {
    name: 'Bic',
    wheels: false,
    engine: false,
    color: 'azul'
}