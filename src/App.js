import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let Products =[
    {name:"Photoshop",price:"$6.99"},
    {name:"Illastator",price:"$7.55"}
]
const nayoks =['jamal','rubel','jamil','shubo','bappi']
// const nayokName = nayoks.map(nayok =>nayok)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {
            nayoks.map(nayok =><li>{nayok}</li>)
          }
         <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
        </ul>
        <p>My first paragraph</p>
        <User></User>
        <Counter></Counter>
        {
        Products.map(pd => <PersonFour product={pd} ></PersonFour>)
        }
        {/* <PersonFour name={Products[0].name}price={Products[0].price}></PersonFour> */}
        <PersonFour product ={Products[1]} ></PersonFour>
       
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <PersonAll></PersonAll>
        <PersonAll></PersonAll>
        <PersonAll></PersonAll>
        <PersonTwo name="jolil uddin" job="football"></PersonTwo>
        <PersonTwo name="lamal" job="cricket"></PersonTwo>
        <PersonThree name="Saiful Islam" profession="Student"></PersonThree>
        <PersonThree name="AL AMIN HOSSAIN" profession="Stdentnt "></PersonThree>
        
      </header>
    </div>
  );
}
function User() {
  const [users,setUsers] = useState([]);
  useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  },[])
  return (
    <div>
      <h3>Dynamic User:{users.length}</h3>
    <ul>
     {
        users.map(user =><li>{user.name}+''+{user.phone}</li>)
     }
    </ul>
    </div>
  )
}

function Counter() {
  const [count,setCount]=useState(10);
  const handleDecrease = () => setCount(count -1)
  const handleIncrease =() => {
    const newCount =count +1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onMouseMove={handleDecrease}>Decrase</button>
    </div>
  )
}


function PersonFour(props) {
  const productStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    margin:"10px",
    backgroundColor:'lightgray',
    color:'black',
    height:'200px',
    width:'200px',
    float:'left'
  }
let {name,price}=props.product
  return (
    <div style={productStyle}>
       {/* <h4>{props.name}</h4> */}
      {/* <h4>{props.product.name}</h4> */}
      <h4>{name}</h4>
   {/* <h5>{props.product.price}</h5> */}
    <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}


function Person() {
  const personStyle ={
    border:"2px solid red",
    margin:"10px"
  }
  return (
  <div style ={personStyle}> 
  <h1>Name: Shakib All Hasan </h1>
  <h3>Hero</h3>
  </div>
  )
}

function PersonAll() {
  return(
    <div style={{border:'4px solid green',margin:'10px'}}>
      <h1>Mashrafe</h1>
      <h3>HERO OF THE CRICKET TEAM</h3>
    </div>
  )
}

function PersonTwo(props) {
  let PersonTwoStyle ={
    border:"2px solid gray",
    margin:"10px"
  }
  return(
    <div style={PersonTwoStyle}>
      <h1>Name:{props.name}</h1>
  <h2>callu miya:{props.job}</h2>
    </div>
  )
}

function PersonThree(props) {
  return(
    <div style={{color:"red"}}>
      <h2>Name:{props.name}</h2>
      <p>profession:{props.profession}</p>
    </div>
  )
}


export default App;
