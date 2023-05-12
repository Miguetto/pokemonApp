import React from 'react'
import { useState } from 'react';
import { getPokemon } from '../../store/slices/pokemon';
import { useDispatch } from 'react-redux';

export const SearchPokemon = () => {

    const [namePokemon, setNamePokemon] = useState('');
    const dispatch = useDispatch();

    return (
        <>
            <input 
                type="text" 
                className="form"
                value={ namePokemon }
                placeholder="Nombre del pokémon..."
                onChange={
                    (e) => {
                        setNamePokemon(e.target.value);
                    }
                }
            />
            <button className="btn"
                onClick={
                    () => {
                        dispatch(getPokemon(namePokemon));
                    }
                }
            >Buscar</button>
        </>
    )
}

export default SearchPokemon;