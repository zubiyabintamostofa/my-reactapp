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
      <h5>New component</h5>
      <friend></friend>
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

function friend(){
  return(
    <div>
      <h3>Name:Bini</h3>
      <p>job:Doctor</p>
    </div>
  )
}

export default App;
