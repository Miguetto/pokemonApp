import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../store/slices/pokemon';

const ResultPokemon = () => {

  const dispatch = useDispatch();
  const { pokemon = [], img, hp, attack, defense, speed, isLoading } = useSelector(state => state.pokemon);

  useEffect(() => {
    dispatch( getPokemon() );
  }, []);

  return (
    <>
    <div className="container">
        <div className="card">
          <p className="hp"> { hp } HP</p>
          <img src={ img } alt={ pokemon.name } className="card-body-img" />
          <h2 className="poke-name">
            { pokemon.name }
          </h2>
          <p className="types">{ pokemon.base_experience } Exp.</p>
        
          <div className="stats">
              <div>
                <h3>{ attack }</h3>
                <p>ATTACK</p>
              </div>
              <div>
                <h3>{ defense }</h3>
                <p>DEFENSE</p>
              </div>
              <div>
                <h3>{ speed }</h3>
                <p>SPEED</p>
              </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default ResultPokemon;