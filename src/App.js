import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Person name="jini" actor=" Dulkar salman"></Person>
      <Person name="mimi" actor="allu arjun"></Person>
      <Person name="simi"></Person>
      <h3>New component Yaaa</h3>
      <Friend name="joli" favFood="misty"></Friend>
      <Friend name="koli" favFood="biriani"></Friend>
       
    </div>
  )
}
function Person(props)
{  //console.log(props)
  return (
    <div className="person">
    <h1> Name:{props.name}</h1>
    <p>Actor:{props.actor}</p>
  </div>
  )
}

function Friend(props){
  console.log(props)
  return(
    <div className='container'>
      <h3>Name:{props.name}</h3>
      <p>Fav-Food:{props.favFood}</p>
    </div>
  )
}

export default App;
