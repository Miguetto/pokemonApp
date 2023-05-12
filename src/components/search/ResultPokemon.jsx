import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../store/slices/pokemon';

const ResultPokemon = () => {

  const dispatch = useDispatch();
  const { pokemon = [], img, hp, attack, defense, specialAttack, isLoading } = useSelector(state => state.pokemon);

  useEffect(() => {
    dispatch( getPokemon() );
  }, []);

  return (
    <>
    <main className="flex">

    <article className="card">
      <h3>
        { isLoading &&  <span>Buscando...</span>}
      </h3>
        <img src="../../img/bg-pattern-card.svg" alt="imagen header card" className="card-header" />
        <div className="card-body">
            <img src={ img } alt={ pokemon.name } className="card-body-img" />
            <h1 className="card-body-title">
              { pokemon.name }
              <span> { hp } HP</span>
            </h1>
            <p className="card-body-text">Type: { pokemon.base_experience } </p>
        </div>
        <div className="card-footer">
            <div className="card-footer-social">
              <h3>ATTACK</h3>
              <p>{ attack }</p>
            </div>
            <div className="card-footer-social">
              <h3>DEFENSE</h3>
              <p>{ defense }</p>
            </div>
            <div className="card-footer-social">
              <h3>SPECIAL ATTACK</h3>
              <p>{ specialAttack }</p>
            </div>
        </div>
    </article>
    </main>
    </>
  )
}

export default ResultPokemon;