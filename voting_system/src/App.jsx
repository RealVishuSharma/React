import { useState } from 'react'
import './App.css'
import TotVotes from './Totalvotes';

function App() {
  const [count, setCount] = useState(0)
  const [age, setage] = useState()
  const [bjp, setbjp] = useState(0)
  const [congress, setcongress] = useState(0)
  const [aap, setaap] = useState(0)
  const [bakwas, setbakwas] = useState(0)
  // const [tvotes, settvotes] = useState(false);

  // console.log(tvotes);

  
  const dob = (Event) => {
    setCount(Event.target.value);
  }

  const agediff = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var today = date.getDate();

    var byear = count.slice(0, 4);
    var yeardiff = year - parseInt(byear);

    var bmonth = count.slice(5, 7);
    var mdiff = month - parseInt(bmonth);
    var monthdiff = Math.abs(mdiff);

    var bdate = count.slice(8, 10);
    var ddiff = 30 - parseInt(bdate) + today;
    var datediff = Math.abs(ddiff);

    if(yeardiff < 18) {
      setage(`Bete, Phele Bada Ho ja... ${18 - yeardiff} saal ruk abhi...`);
    }else{
      setage(`You are ${yeardiff} years, ${monthdiff} months and ${datediff} days old. You are Eligible to Vote.`)
    }

  }

  const vote = () => {
      if (document.getElementById("bjp").checked) {
        setbjp(bjp + 1);
      }

  
      if (document.getElementById("congress").checked) {
        setcongress(congress + 1);
      }
    

      if (document.getElementById("aap").checked) {
        setaap(aap + 1);
      }
  

      if (document.getElementById("bakwas").checked) {
        setbakwas(bakwas + 1);
      }
    
  }  


  return (
    <>
    <form action="">
      <label htmlFor="">
        <input type="date" placeholder='Enter Date of Birth' onChange={dob} />
      </label>

    </form>

    <input type="submit" value="Check your AGE" onClick={agediff}/>
    <h4>{age}</h4>
    <form action="">
      <label htmlFor="bjp">
        <input type="radio"  value="Bhartiya Janta Party" name='Election' id='bjp' />Bhartiya Janta Party
      </label>

      <label htmlFor="congress">
        <input type="radio" value="Congress"  name='Election' id='congress' /> Congress
      </label>

      <label htmlFor="aap">
        <input type="radio" value="Aam Aadmi Party" name='Election' id='aap' /> Aam Aadmi Party
      </label>

      <label htmlFor="bakwas">
        <input type="radio" value="Bakwas"  name='Election' id='bakwas'  /> Bakwas
      </label>

      <br/>
      <br/>

      <label htmlFor="vote">
        <input type="button"  id='vote' onClick={vote} value="Vote"/>
      </label>
    </form>

    <TotVotes  bjp={bjp} congress={congress} aap={aap} bakwas={bakwas}/>

    </>
  )

}

export default App
