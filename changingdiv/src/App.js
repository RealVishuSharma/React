import { useState } from 'react';
import './App.css';


const[state, changeState] = useState(200);

let changeDiv = () => {
  changeState(state + 20);
}

function App() {

  return (
  <div className='flex max-w-screen max-h-screen' style={}>
    <div className="App bg-black h-10 w-10 items-center" onClick={changeDiv}>
      <h1>Hello {state}</h1>
    </div>
  </div>
  );
}

export default App;
