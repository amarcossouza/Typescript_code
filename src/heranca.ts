class Person {
    constructor(public firstName: string, public lastname: string, public age) { }
    
    greet() {
        consolelog('Hi')
    }
}

// cliente do banco
class Clients extends Person {
    balance() {
        console.log('your balance is $100.00')
    }
}

let client1 = new Clients('Andre', 'Iacono', 25)
