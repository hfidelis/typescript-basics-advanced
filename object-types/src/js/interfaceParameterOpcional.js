"use strict";
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const user1 = {
    email: "heitor@email.com",
    role: "Admin"
};
const user2 = {
    email: "fulano@email.com"
};
showUserDetails(user1);
showUserDetails(user2);
