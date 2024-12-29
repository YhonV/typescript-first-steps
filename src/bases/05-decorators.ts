class newPokemon {
    constructor(
        public readonly id: number,
        public name: string,
    ){}

    scream(){
        console.log(`... *Mira profundamente a los ojos*`)
    }

    speak(){
        console.log(`NO QUIERO HABLAR!!!`)
    }
}

const MyDecorator = () => {
    return (target: Function) => {
        return newPokemon;
    }
}

@MyDecorator()
export class Pokemon{
    constructor(
        public readonly id: number,
        public name: string,
    ){}

    scream(){
        console.log(`${this.name.toUpperCase()} !!!!`)
    }

    speak(){
        console.log(`${this.name.slice(0,5)} ${this.name}`)
    }
}

export const charmander = new Pokemon(4,'Charmander');

charmander.scream();
charmander.speak();