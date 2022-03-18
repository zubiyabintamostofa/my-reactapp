import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h3>New component Yaaa</h3>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  )
}
function Person(){
  return (
    <div className="person">
    <h1>Zubiya Binta Mostofa</h1>
    <p>profession:Engineer</p>
  </div>
  )
}

function Friend(){
  return(
    <div className='container'>
      <h3>Name:Bini</h3>
      <p>job:Doctor</p>
    </div>
  )
}

export default App;
