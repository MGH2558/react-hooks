// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { ErrorBoundary } from 'react-error-boundary';
import {
  PokemonInfoFallback,
  PokemonForm,
  PokemonDataView,
  fetchPokemon,
  PokemonErrorBoundary,
} from '../pokemon'


function ErrorFallback({ error,resetErrorBoundary }) {
  return (
    <div role="alert">
      There was an error:
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary} >Try again</button>
    </div>
  )
}


function PokemonInfo({ pokemonName }) {
  const [state, setState] = React.useState({
    status: pokemonName ? 'pending' : 'idle',
    pokemon: null,
    error: null,
  })
  const { status, pokemon, error } = state;

  React.useEffect(() => {
    if (!pokemonName) {
      return;
    }
    setState({ status: 'pending' });
    fetchPokemon(pokemonName, 200)
      .then(
        pokemon => setState({ pokemon, status: 'resolved' }),
        error => setState({ error, status: 'rejected' })
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonName])


  if (status === 'idle') {
    return 'submit a pokemon'
  }
  else if (status === 'pending') {
    return <PokemonInfoFallback name={pokemonName} />
  }
  else if (status === 'rejected') {
    // this will be handled by our error boundary
    throw error;
  }
  else if (status === 'resolved') {
    return <PokemonDataView pokemon={pokemon} />
  }
  throw new Error('This is impossible :|');

}


function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  function handleReset() {
    setPokemonName('');
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <ErrorBoundary onReset={handleReset} FallbackComponent={ErrorFallback} resetKeys={[pokemonName]}>
          <PokemonInfo pokemonName={pokemonName} />
        </ErrorBoundary>
      </div>
    </div>
  )
}



export default App
