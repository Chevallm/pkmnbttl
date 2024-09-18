import { abilities } from "./data/abilities";
import { pokedexData } from "./data/pokemons";
import { Pokemon } from "./types/Pokemon";

export class PokemonGenerator {
    
    POKEDEX = pokedexData;
    ATTACKS = abilities;

    generatePokemon(): Pokemon {
        const random = Math.floor(Math.random() * 150);
        const pokemon = this.POKEDEX[random];
        const attacks = [];
        for (let attackI = 0; attackI < 2; attackI++) {
            const randomAttackIndex = Math.floor(Math.random() * (this.ATTACKS.length-1));
            const attack = this.ATTACKS[randomAttackIndex];
            attacks.push(attack);
        }
        pokemon.attacks = attacks;
        return pokemon;
    }
}