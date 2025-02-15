import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter';

export class Pokemon {
  
    get imageUrl(): string{
        return `https://www.pokemon.com/us/pokedex/${this.name}`;
    }

    constructor(
        public readonly id: number,
        public name: string,
        private readonly http: HttpAdapter,
    ){}

    scream(){
        console.log(`${this.name.toUpperCase()} !!!!`)
    }

    speak(){
        console.log(`${this.name.slice(0,5)} ${this.name}`)
    }

    async getMoves(): Promise<Move[]>{
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves[2].move.name);
        return data.moves;
    }
}

const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(4,'Charmander', pokeApiFetch);

charmander.getMoves();