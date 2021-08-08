// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// function Greeting({ initialName = '' }) {

//   const [name, setName] = React.useState(initialName);
//   const [showName, setshowName] = React.useState(false);
//   const [error, setError] = React.useState('');

//   function handleChange(event) {
//     const { value } = event.target;
//     setName(value);
//   }

//   function handleClick() {
//     name ? setshowName(true) : setError('Please insert your name!');
//   }

//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input onChange={handleChange} id="name" value={name} />
//       </form>
//       <button onClick={handleClick}>add</button>
//       {showName ? <strong>Hello {name}</strong> : <strong style={{ color: 'crimson', textAlign: 'center' }}>{error}</strong>}
//     </div>
//   )
// }

function capitalFirstLetter(word) {
  const firstLetter = word.slice(0, 1).toUpperCase();
  const rest = word.slice(1);
  return firstLetter + rest;
}

function AddTodo() {
  const [task, setTask] = React.useState('');

  const style = {
    titleStyle: { color: 'gold', padding: '1rem', borderRadius: '.9rem' },
    btnStyle: { color: '#000', marginLeft: '1rem', backgroundColor: task ? 'limegreen' : 'gold', borderRadius: '.2rem', padding: '.2rem .8rem', width: '124.141px', opacity: task ? 1 : .7 },
    inputStyle: { borderRadius: '.2rem', padding: '.3rem', fontSize: '110%' }
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(`${task} added.`)
  }

  function handleChange(e) {
    const { value } = e.target;;
    setTask(capitalFirstLetter(value))
  }

  return (
    <>
      <h2 style={style.titleStyle}>The best TODO app ever !</h2>
      <form onSubmit={handleSubmit}>
        <input style={style.inputStyle} onChange={handleChange} value={task} placeholder="add a task" />
        <button style={style.btnStyle} disabled={!Boolean(task)} type="submit" >{task ? 'Add' : 'insert a task'}</button>
      </form>
    </>
  )
}

function TodoList() {
  const listStyle = { padding: '0' }
  const itemStyle = { marginLeft: '.1rem', padding: '.3rem', backgroundColor: 'lightblue', margin: '1rem', color: '#333' }

  return (
    <ol style={listStyle}>
      <li style={itemStyle}>Hello</li>
    </ol>
  )
}


function Parent() {
  const parentStyle = { backgroundColor: 'crimson', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3rem', fontFamily: 'cursive' }
  // const childStyle = {width: '100%', maxWidth: '50%', border: '1px dashed lightblue',borderRadius: '.3rem', padding: '1rem'}
  return (
    <div style={parentStyle}>
      <div>
        <AddTodo />
        <TodoList />
      </div>
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
  return <Parent />

  // return <Math />
}

export default App
