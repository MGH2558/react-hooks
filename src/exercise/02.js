// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({ initialName = '' }) {

  const storedName = localStorage.getItem('name');
  const [name, setName] = React.useState(storedName || initialName);

  
  React.useEffect(() => {
    localStorage.setItem('name', name);
    console.log(storedName);
  })


  function handleChange(event) {
    const { value } = event.target;
    setName(value.trim());
  }


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
