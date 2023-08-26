// 1 Iniciando Projeto
// console.log('Express + TS')

// 2 Inicializando o Express
// Import dos tipos Request && Response
import express, {NextFunction, Request, Response} from "express";

    /* Instanciando */
const app = express()

// 4 Fazendo uma rota: POST
// Middleware, habilitando a execução de JSON's em nossa aplicação.
app.use(express.json())

// 12 Middleware para todas as Rotas
    /* Usando o .use para generalizar um middleware */
function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path)
    next()
}

app.use(showPath)

// 3 Fazendo uma rota : GET
    /* localhost:porta -> 3030 */
    /* req e res, requisição do usuário e resposta do servidor. */
app.get('/', (req, res) => {
    return res.send('Hello Express!') // Responde com Hello Word! na página inicial
})

// 4 Fazendo uma rota: POST
    /* localhost:porta/api/produtos */
app.post('/api/products', (req, res) => {
    /* Printando requisição feita no Postman */
    console.log(req.body)
    
    return res.send('Produto adicionado!.')

})

// 5 Fazendo uma rota para todos os verbos: All
    /* Podemos tratar o resultado dependendo da rota. */
app.all('/api/products/check', (req, res) => {
    /* Verif. método HTTP, req.method */
    if (req.method === 'POST') {
        return res.send('Inseriu algum registro!')
    } else if (req.method === 'GET') {
        return res.send('Leu algum registro!')
    } else {
        return res.send('Não podemos realizar esta operação.')
    }
})

// 6 Interfaces do Express
// Usando os tipos, temos auxilio do TS para codar.
app.get('/api/interfaces', (req: Request, res: Response) => {
    
    // return req.send('Utilizando interfaces') -> Mostra erro
    return res.send('Utilizando interfaces')
})

// 7 Enviando JSON 
app.get('/api/json', (req: Request, res: Response) => {
    /* O objeto Javascript será convertido para JSON
     e enviado como resposta ao usuário. */
    return res.json({
        name: 'Shirt',
        price: 35.50,
        color: 'blue',
        sizes: ['P', 'M', 'G']
    })

})

// 8 Router Parameters
    /* Pegando parâmetros de rotas usando req.params */
    /* Rota precisa ser dinâmica, parâmetros precisam estar no padrão :param */
app.get('/api/products/:id', (req: Request, res: Response) => {
    console.log(req.params);
    /* Instanciando o parâmetro como uma variável. */
    const id = req.params.id

    if(id === '1') {

        const product = {
            id: 1,
            name: 'Cap',
            price: 10
        }

        return res.json(product)

    } else {
        return res.send('Produto não encontrado.')   
    }

})

// 9 Rotas mais complexas
    /* Rotas com mais de um parâmetro */
    /* Todos os dados continuam em req.params */
app.get('/api/products/:productId/review/:reviewId', (req: Request, res: Response) => {

    console.log(req.params)

    const [productId, reviewId] = [req.params.productId, req.params.reviewId]
    
    return res.send(`Acessando a review ${reviewId} do produto id: ${productId}`)

})

// 10 Router Handler
    /* Recurso onde retiramos a função anônima de uma rota e externalizamos para uma função. */
    /* Podemos reaproveitar essa função ou estrutura para nossa aplicação inteira.  */
function getUser(req: Request, res: Response) {
    console.log(`Resgatando o usuário com id: ${req.params.id}`)

    return res.send('O Usuário foi encontrado')
}

app.get('/api/user/:id', getUser)

// 11 Middleware
    /* É um recurso para executar uma função entre a execução de uma rota.
     EX: app.use(express.json()) */
    /* Podemos usar middlewares para validações. */
function checkUser(req: Request, res: Response, next: NextFunction) {

    if (req.params.id === '1') {
        console.log('Pode seguir')
        next()
    } else {
        console.log('Acesso restrito')
    }

}

app.get('/api/user/:id/access', checkUser, (req: Request, res: Response) => {

    return res.json({
        msg: 'Bem vindo à área administrativa!'
    })

})

// 13 Request e Response Generics
    /* Estabelecendo argumentos que vem pelo request e vão pela response */
    /* Usamos os Generics de Response e Request, interfaces disponibilizadas pelo Express */
app.get(
    '/api/user/:id/details/:name',
    (
        req: Request<{id: string, name: string}>,
        res: Response<{status: boolean}>
    ) => {

        console.log(`ID: ${req.params.id}`)
        console.log(`Name: ${req.params.name}`)

        return res.json({status: true})
})

// 14 Tratando Erros com Try/Catch
app.get('/api/error', (req: Request, res: Response) => {
    try {

        // Nossa lógica
        throw new Error("Algo deu errado!")

    } catch (err: any) {

        res.status(500).json({msg: err.message})
    }
})

// /* Escolhendo uma porta */ //
app.listen(3030, () => {
    console.log('Aplicaçao de TS + Express funcionando!')
})
