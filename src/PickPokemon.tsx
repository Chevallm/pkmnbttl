import { pokedexData } from "./data/pokemons"
import { Pokemon } from "./types/Pokemon";

import './PickPokemon.css'
import { PokemonGenerator } from "./PokemonGenerator";

type PickPokemonProps = {
    howMuch: number,
    pickPokemon: Function
}
export function PickPokemon(props: PickPokemonProps) {

    const pokemonGenerator = new PokemonGenerator();

    const pokemons = pokedexData;
    const POKEMON_CHOICE_NUMBER = 3;

    function pickRandomPokemon(): Pokemon {
        const max = 150;
        const random = Math.floor(Math.random() * max);
        return pokemons[random];
    }

    pickRandomPokemon();

    function pokemonsPicks() {
        const _pokemons = [];
        for (let i = 0; i < POKEMON_CHOICE_NUMBER; i++) {
            const p = pokemonGenerator.generatePokemon();            
            _pokemons.push(
                <div key={i} className="pokemon-pick">
                    <img src={`https://raw.githubusercontent.com/Chevallm/pokemon-explorer/refs/heads/main/public/thumbnails/${p.id.toString().padStart(3, '0')}.png`} height="200"/>
                    <span>{p.name}</span>
                    <section className="types">
                        {p.type.map(t => <span>{t}</span>)}
                    </section>
                    <section className="attacks">
                        {p.attacks?.map(a => <div className={`attack type-${a.type}`}>
                            <span className="name">{a.name}</span>
                            <span className="category"><img src={`${a.category}.png`} height="18"/> {a.pp} PP</span>
                            <span className="power">{a.power}</span>
                        </div>)}
                    </section>
                    <button onClick={() => props.pickPokemon()}>Pick</button>
                </div>
            )
        }
        return _pokemons;
    }

    return (
        <>
            <div className="pokemon-list">
                {pokemonsPicks()}
            </div>
        </>
    )
}