import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../store/slices/pokemon';

const typeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
};

const ResultPokemon = () => {

  const dispatch = useDispatch();
  const { pokemon, img, hp, attack, defense, speed } = useSelector(state => state.pokemon);
  
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