class Person {
    constructor(public firstName: string, public lastname: string, public age) { }
    
    get greet() {
        return this.firstName + ' ' + this.lastname
    }
}

// cliente do banco
class Clients extends Person {

}

class Staff extends Person{

}

// funcionario do banco
let client1 = new Clients('Andre', 'Iacono', 25)
let staff = new Starff('Ana', 'Silva', 30)