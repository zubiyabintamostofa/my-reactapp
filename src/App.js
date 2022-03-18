import logo from './logo.svg';
import './App.css';


// array of object

const singers=[
  {name:'porshi',job:'singer'},
  {name:'tahsan',job:'singer2'},
  {name:'balam',job:'singer3'},
  {name:'habib',job:'singer4'}
]


function App() {
  const nayikas=['jini','mimi','simi','himi','jimi']
  return (
    <div className="App">
      {
        nayikas.map(naika=> <li>Name:{naika}</li>)
      }
      {
        nayikas.map(naika=><Person name={naika}></Person>)
      }


       


       {
         singers.map(singer=><Person name={singer.name}></Person>)
       }







      {/* <Person name={nayikas[0]}actor=" Dulkar salman"></Person>
      <Person name={nayikas[1]} actor="allu arjun"></Person>
      <Person name="simi"></Person>  */}
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
