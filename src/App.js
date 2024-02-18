import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Nav from './views/Nav/Nav';

const App = () => {

  let [name, setName] = useState('Eric')
  let [address, setAddress] = useState('')

  const HandleeEvenClick = (event) => {
    setName(address)
  }

  const handleeOnchangeInput = (event) => {
    setAddress(event.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World by {name}</h1>

        <input type='text' value={address} onChange={(event) => handleeOnchangeInput(event)} />
        <button type='buttion' onClick={(event) => HandleeEvenClick(event)}>Click me</button>

      </header>
    </div>
  );
}

export default App;
