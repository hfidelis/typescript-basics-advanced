// Verificando se um usuário poude ou não fazer uma alteração no sistema.
function checkIfPosted() {
    return function (target: Object, key: string | Symbol, descriptor: PropertyDescriptor) {
        const childFunction = descriptor.value
        // console.log(childFunction);
        descriptor.value = function(...args: any[]) {
            if(args[1] === true) {
                console.log('Usuário já postou!')
                return null
            } else {
                return childFunction.apply(this, args)
            }
        }
        return descriptor
    }
}


class Post {
    alreadyPosted = false

    @checkIfPosted()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true
        console.log(`Post do usuário: ${content}`)
    }
}

const newPost = new Post()
newPost.post("Meu primeiro post!", newPost.alreadyPosted)
newPost.post("Meu segundo post!", newPost.alreadyPosted)
newPost.post("Meu terceiro post", newPost.alreadyPosted)