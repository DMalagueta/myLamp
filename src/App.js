import './App.css';
import Lampada from './components/Lampada'
import { useState } from 'react';

function App() {

  const [light, setLight] = useState(false);
  const [energy, setEnergy] = useState(false);

  let fillColor = light ? 'tomato' : 'gray';
  let fillBtn = energy ? 'ON' : 'OFF';
  


  const handleLight = () => {
      setLight(!light);
      setEnergy(!energy);
     
  }

  return (
    <div className="app">
        <h1>A minha lampada</h1>
        <section>
          <Lampada fillColor={fillColor}/>
        </section>
        <br />
        <button onClick={handleLight}>{fillBtn}</button>
    </div>
  );
}

export default App;
