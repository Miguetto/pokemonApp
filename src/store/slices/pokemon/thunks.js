import { pokemonApi } from "../../../api/pokemonApi";
import { startLoadingPokemons, searchPokemon } from "./pokemonSlice";

export const getPokemon = ( valor = 'pikachu') => {
    return async( dispatch ) => {
        dispatch( startLoadingPokemons() );

        const { data } = await pokemonApi.get(`/pokemon/${valor}`);
        dispatch( searchPokemon({
            pokemon: data, 
            img: data.sprites.other.dream_world.front_default, 
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            type: data.types[0].type.name,
        }));
    };
};