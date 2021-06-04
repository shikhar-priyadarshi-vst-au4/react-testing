import {useState} from 'react';
import './App.css';
function App() {
  const [state, setState] = useState(0);
  const [error, setError] = useState(false);
  return (
    <div className="App" data-test='component-app'>
      <h1 data-test='component-counter'>
        The current counter value <br/>
        <span data-test="count">{state}</span>  
      </h1>
      <small data-test="error" className={`${error ? "" : "hidden"}`}>
         Counter can't be below zero
      </small>
      <br/>
      <button data-test='increment-button' onClick={() => {
        if(error){
          setError(false);
        }
        setState(state + 1)
      }}>
        Increment Count
      </button>
      <button data-test='decrement-button' onClick={() => {
        if(state > 0){
           setState(state - 1);
        }
        else{
          setError(true);
        }
      }}>Decrement Count</button>
    </div>
  );
}

export default App;

