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



function AddTodo({ setTask }) {
  const [value, setValue] = React.useState("type something...");

  const style = {
    titleStyle: { color: 'gold', padding: '1rem', borderRadius: '.9rem' },
    btnStyle: { color: value ? '#fff' : '#000', marginLeft: '1rem', backgroundColor: value ? 'limegreen' : 'gold', opacity: value ? 1 : .5, borderRadius: '.2rem', padding: '.2rem .8rem', width: '124.141px' },
    inputStyle: { borderRadius: '.2rem', padding: '.3rem', fontSize: '110%' }
  }

  function handleChange(e) {
    const { value } = e.target;;
    setValue(capitalFirstLetter(value))
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTask((prevState) => ([...prevState, value]))
  }

  return (
    <>
      <h2 style={style.titleStyle}>The best TODO app ever !</h2>
      <form onSubmit={handleSubmit}>
        <input style={style.inputStyle} onChange={handleChange} value={value} placeholder="add a task" />
        <button style={style.btnStyle} disabled={!Boolean(value)} type="submit" >
          Add
        </button>
      </form>
    </>
  )
}



function TodoList({ tasks }) {
  const listStyle = { padding: '0' }
  const itemStyle = {
    mainStyle: {
      marginLeft: '.1rem', padding: '.3rem 1rem', backgroundColor: 'lightblue', margin: '1rem', color: '#333', display: 'flex', justifyContent: 'space-between', borderRadius: '.1rem',
    },
    removeBtnStyle: { backgroundColor: 'red', color: '#fff' }
  }

  React.useEffect(() => {
    console.log(`Updated task list: ${tasks}`)
  }, [tasks])


  return (
    <ol style={listStyle}>
      {tasks.length ? tasks.map((task, index) => (<li style={itemStyle.mainStyle} key={`${task}-${index}`}>{task}</li>)) : <h3>Task list is empty!</h3>}
    </ol>
  )
}



function Container() {
  const parentStyle = { backgroundColor: 'crimson', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3rem', fontFamily: 'cursive' }
  const [tasks, setTask] = React.useState([])

  // function removeAllSpaces(str) {
  //   return str.replace(/\s/g, '')
  // }


  return (
    <div style={parentStyle}>
      <div>
        <AddTodo setTask={setTask} />
        <TodoList tasks={tasks} />
      </div>
    </div>
  )
}



function App() {
  return <Container />
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

export default App
