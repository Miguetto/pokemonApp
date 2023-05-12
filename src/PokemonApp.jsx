import SearchPokemon from './components/search/searchPokemon';
import ResultPokemon from './components/search/ResultPokemon';

export const PokemonApp = () => {
  
  return (
    <>
        <main className="container">
          <section className="card">
            <ResultPokemon></ResultPokemon>
          </section>
          <SearchPokemon></SearchPokemon>
        </main>
    </>
  );
}
