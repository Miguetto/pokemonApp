import SearchPokemon from './components/search/SearchPokemon';
import ResultPokemon from './components/search/ResultPokemon';
import { useSelector } from 'react-redux';

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

export const PokemonApp = () => {

  
  const { type } = useSelector(state => state.pokemon);

  return (
    <>
        <main className="container">
          <section className="card" style={{background:`radial-gradient(circle at 50% 0%, ${typeColor[type]} 36%, #ffffff 36%)`}}>
            <ResultPokemon></ResultPokemon>
          </section>
          <SearchPokemon></SearchPokemon>
        </main>
    </>
  );
}
