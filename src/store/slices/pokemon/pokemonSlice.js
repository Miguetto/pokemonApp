import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemon: [],
        img: [],
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoading = true;
        },
        searchPokemon: (state, action) => {
            state.isLoading = false;
            state.pokemon = action.payload.pokemon;
            state.img = action.payload.img;
            state.hp = action.payload.hp;
            state.attack = action.payload.attack;
            state.defense = action.payload.defense;
            state.speed = action.payload.speed;
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, searchPokemon } = pokemonSlice.actions;