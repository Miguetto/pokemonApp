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
        type: '',
    },
    reducers: {
        searchPokemon: (state, action) => {
            state.pokemon = action.payload.pokemon;
            state.img = action.payload.img;
            state.hp = action.payload.hp;
            state.attack = action.payload.attack;
            state.defense = action.payload.defense;
            state.speed = action.payload.speed;
            state.type = action.payload.type;
        }
    }
});


// Action creators are generated for each case reducer function
export const { searchPokemon } = pokemonSlice.actions;