// cria um novo tipo, baseado no tipo de algum dado.
// Interessante para criar variáveis com o mesmos tipos de outras.

const userName: string = "Heitor"

const userName2: typeof userName = 'Fulano'

const userName3: typeof userName = 'João'

// const userName3: typeof userName = 14 <- Erro

type x = typeof userName

const userName4: x = 'Ciclano'