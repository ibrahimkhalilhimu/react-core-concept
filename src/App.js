import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MovieCounter></MovieCounter>
        <Nayok name="joshim"></Nayok>
        <Nayok name ="shakib"></Nayok>
        <Nayok></Nayok>
        <p>My first paragraph</p>

      </header>
    </div>
  );
}
function MovieCounter() {
   const [count,setCount] =useState(0);
   const handleClick =() => setCount(count + 1)
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
  <h5>Number of Movie: {count}</h5>
  <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props) {
return <h4>Movies I have acted: {props.movies}</h4>
}


function Nayok(props) {
  const nayokStyle ={
    border:"2px solid red",
    margin:"20px"
  }
  return (
    <div style={nayokStyle}>
      <h1>
        NAYOK-{props.name}
      </h1>
      <h4>I have done</h4>
    </div>
  )
}

export default App;
