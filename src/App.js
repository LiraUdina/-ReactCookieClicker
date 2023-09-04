import { useEffect, useState } from "react"
import './App.css';
import cookie from './cookie.png';

function App() {

  const initialChislo = parseInt(localStorage.getItem('chislo')) || 0;

  const [chislo, setChislo] = useState(initialChislo);

  function clickImg() {
    if (chislo >= 10) {
      setChislo(chislo + 2);
    } else {
      setChislo(chislo + 1);
    }
  }

  function clickbutton() {
    if (chislo >= 10) {
      setChislo(chislo + 2);
    }
  }

  useEffect(() => {
    localStorage.setItem('chislo', chislo);
  }, [chislo]);

  return (
    <div className="App">
      <div>
        <h2>Кликай печеньку</h2>
        <img className='image' id='img-cookie' src={cookie} onClick={clickImg} />
        <div>
          <h3>Печенек: {chislo}</h3>
          <button className='button' onClick={clickbutton}>Upgrade</button>
        </div>
      </div>
    </div>
  );
}

export default App;