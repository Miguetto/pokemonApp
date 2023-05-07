import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./slices/pokemon";

export const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer,
    },
});