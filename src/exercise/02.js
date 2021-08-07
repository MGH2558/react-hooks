// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function useLocalStorageState(key, defaultValue = '', { serialize = JSON.stringify, deserialize = JSON.parse } = {}) {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);

    return valueInLocalStorage ? deserialize(valueInLocalStorage) : (typeof defaultValue === 'function' ? defaultValue() : defaultValue);
  })

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;

    window.localStorage.setItem(key, serialize(state));
  }, [key, serialize, state])

  return [state, setState]
}


function Greeting({ initialName = '' }) {
  const [name, setName] = useLocalStorageState('name', initialName);

  function handleChange(event) {
    const { value } = event.target;
    setName(value.trim());
  }

  console.log(`name: ${localStorage.getItem('name')}`);

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name.trim()} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Your current name is set to {name.trim()}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
