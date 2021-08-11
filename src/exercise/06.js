// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {
  PokemonInfoFallback,
  PokemonForm,
  PokemonDataView,
  fetchPokemon,
  PokemonErrorBoundary,
} from '../pokemon'

// class ErrorBoundary extends React.Component {

//   render() {
//     return console.log('Test');
//   }
// }

function PokemonInfo({ pokemonName }) {
  const [state, setState] = React.useState({
    status: 'idle',
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
    return (
      <div role="alert">
        There was an error: ' '
        <span>{error.message}</span>
        <pre>Could not find "{pokemonName}"</pre>
      </div>
    )
  }
  else if (status === 'resolved') {
    return <PokemonDataView pokemon={null} />
  }
  throw new Error('This is impossible :|');

}

function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  )
}

export default App
