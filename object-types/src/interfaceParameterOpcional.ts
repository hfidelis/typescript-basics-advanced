// Parâmetros opcionais terminam com ?.
interface User {
    email: string,
    role?: string
}

function showUserDetails(user: User) {
    console.log(`O usuário tem o e-mail: ${user.email}`)
    if(user.role) {
        console.log(`A função do usuário é: ${user.role}`)
    }
}

const user1: User = {
    email: "heitor@email.com",
    role: "Admin"
}

const user2: User = {
    email: "fulano@email.com"
}

showUserDetails(user1)
showUserDetails(user2)