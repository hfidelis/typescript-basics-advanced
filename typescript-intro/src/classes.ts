// Classes
// Constumamos declarar os tipos no constructor, e declarar as classes antes.
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUsername(): void {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow: boolean): void {
        if (canShow) {
            console.log(`O cargo do usuário ${this.name} é ${this.role}`);
        } else {
            console.log(`Informação restrita`);
        }
    }
}

const zeca = new User('Zeca', 'Admin', true);
console.log(zeca);
zeca.showUsername();
zeca.showUserRole(true);
zeca.showUserRole(false);

// Interfaces em Classes
interface IVehicle {
    brand: string;
    showBrand(): void;
}
// Se não declararmos as heranças da interface (atributos e funções), o ts irá informar erro.
class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}

const fusca = new Car("VW", 4);
fusca.showBrand();

// Herança
// Ao extender a classe, ela herda todos os atributos/funções da classe pai,
// sendo apenas necessário a declaração delas no constructor e no super.
// As novas, precisamos atribuir com o this no modelo padrão.
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi", 4, 2.0)
console.log(a4)
a4.showBrand()