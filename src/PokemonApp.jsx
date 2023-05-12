import SearchPokemon from './components/search/searchPokemon';
import ResultPokemon from './components/search/ResultPokemon';

export const PokemonApp = () => {
  
  return (
    <>
        <hr />
        <div className="col-10 mt-4 border-top pt-3">
          <SearchPokemon></SearchPokemon>
        </div>
        <div className="col-12">
          <ResultPokemon></ResultPokemon>
        </div>
    </>
  );
}
