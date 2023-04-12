import './App.css';
import { useState } from 'react';

function versCelsius(fahrenheit) {
  return (fahrenheit-32) / 1.8;
}

function versFahrenheit(celsius) {
  return (celsius*1.8) + 32;
}

function VerdictEbullition({celsius}){

  if(celsius >= 100) {
    return <div className='alert alert-success'>L'eau bout</div>
  } else {
    return <div className='alert alert-info'>L'eau ne bout pas</div>
  }
}


function ChampConversion({temperature, label, setTemperature}){

  function gererChangement(evenement) {
    if(label === "fahrenheit") {
      setTemperature(versCelsius(evenement.target.value));
    } else {
      setTemperature(evenement.target.value);
    }
  }

  return <div>
    <label htmlFor={label}>Température en {label} </label>
    <input id={label} type="number" value={temperature} onChange={gererChangement}/>
  </div>
}


function Convertisseur(){
  var [temperature, setTemperature ] = useState(50);

  return <div>
    <ChampConversion temperature={temperature} setTemperature={setTemperature} label="celsius" />
    <ChampConversion temperature={versFahrenheit(temperature)} label="fahrenheit" setTemperature={setTemperature} />
    <VerdictEbullition celsius={temperature} />
    </div>
}

function App() {
  return (
    <div className="App">
      <Convertisseur />
    </div>
  );
}

export default App;
