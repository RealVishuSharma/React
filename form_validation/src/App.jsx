import  {useState} from 'react';
// import { ReactDOM } from 'react-dom';
import "./App.css";

function App () {
  const [name, setName]  = useState("Benam");
  
  const changeName = (Event) => {
    console.log(Event.target.value);
    setName(Event.target.value);
  }

  const handleSubmit = () => {
    alert("A name was submitted " + name);
  }


  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={changeName}>
        </input>
      </label>
      <input type="submit" value="Submit" />
    </form>
    </>
  )


                    
}
export default App;