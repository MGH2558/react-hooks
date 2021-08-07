// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({ initialName = '' }) {

  const [name, setName] = React.useState(initialName);
  const [showName, setshowName] = React.useState(false);
  const [error, setError] = React.useState('');

  function handleChange(event) {
    const { value } = event.target;
    setName(value);
  }

  function handleClick() {
    name ? setshowName(true) : setError('Please insert your name!');
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name} />
      </form>
      <button onClick={handleClick}>add</button>
      {showName ? <strong>Hello {name}</strong> : <strong style={{ color: 'crimson', textAlign: 'center' }}>{error}</strong>}
    </div>
  )
}

// function Math() {

//   const [count, setCount] = React.useState(0);
//   const [result, setResult] = React.useState(0);

//   const [showResult, setShowResult] = React.useState(false);

//   function handleChange(e) {
//     const { value } = e.target;
//     setCount(Number(value));
//   }


//   function handleSubmit(e) {
//     e.preventDefault();
//   }


//   function handleClick() {
//     setResult(count);
//     setShowResult(true);
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="increment-inp">Increment: </label>
//           <input type="number" id="increment-inp" onChange={handleChange} />
//         </div>
//         <button onClick={handleClick} >add</button>
//         {showResult ? <h3 style={{ color: '#fff', padding: '2rem', backgroundColor: 'teal' }}>{result}</h3> : null}
//       </form>
//     </div>
//   )
// }

function App() {
  return <Greeting initialName="George" />

  // return <Math />
}

export default App
