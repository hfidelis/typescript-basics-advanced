// Forma de customizar tipos de maneiras infinitas.

type testA = "text"

type CustomType = `some ${testA}`

const testing: CustomType = `some text`

type a1 = "Testando"
type a2 = "Union"

type a3 = `${a1}` | `${a2}`

const testing2: a3 = "Union"
const testing3: a3 = "Testando"