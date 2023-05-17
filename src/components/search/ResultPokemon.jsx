import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../store/slices/pokemon';
import { useState } from 'react';

const ResultPokemon = () => {

  const dispatch = useDispatch();
  const { pokemon = [], img, hp, attack, defense, speed, isLoading } = useSelector(state => state.pokemon);

  useEffect(() => {
    dispatch(getPokemon());
  }, []);

  return (
    <>
      <p className="hp"> {hp} HP</p>
      <img src={img} alt={pokemon.name} className="card-body-img" />
      <h2 className="poke-name">
        {pokemon.name}
      </h2>
      <p className="types">{pokemon.base_experience} Exp.</p>

      <section className="stats">
        <article>
          <h3>{attack}</h3>
          <p>ATTACK</p>
        </article>
        <article>
          <h3>{defense}</h3>
          <p>DEFENSE</p>
        </article>
        <article>
          <h3>{speed}</h3>
          <p>SPEED</p>
        </article>
      </section>
    </>
  )
}

export default ResultPokemon;