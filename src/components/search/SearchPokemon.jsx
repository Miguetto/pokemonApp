import React from 'react'
import { useState } from 'react';
import { getPokemon } from '../../store/slices/pokemon';
import { useDispatch } from 'react-redux';

export const SearchPokemon = () => {

    const [ namePokemon, setNamePokemon ] = useState('');
    const dispatch = useDispatch();

    return (
        <div className="form-group">
            <label htmlFor="search_pokemon" className="text-white">Buscar Pokémon</label>
            <input type="text" className="form-control" id="search_pokemon"
                value={namePokemon}
                onChange={
                    (e) => {
                        e.preventDefault();
                        setNamePokemon(e.target.value);
                    }
                }
            />
            <button className="btn btn-primary mt3"
                onClick={
                    () => {
                        dispatch(getPokemon(namePokemon));
                    }
                }
            >Buscar</button>
        </div>
    )
}

export default SearchPokemon;