class Movies {
    constructor(
        public readonly id: number,
        public name: string,
        private _price: number
    ) { }
}

let movie1 = new Movies(1, 'Dejavu teste',10)
let x = movie1.id
console.log(movie1)