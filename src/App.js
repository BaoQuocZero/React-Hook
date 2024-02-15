import logo from './logo.svg';
import './App.css';

import Nav from './views/Nav/Nav';

const App = () => {

  let name = "Bao";
  let obj = { name: "Quoc", god: "Trai Dat" }
  let link = "https://www.youtube.com/watch?v=Y9gTouaZJ5s&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=10"

  const HandleeEvenClick = (event) => {
    console.log(">>> Click me", event.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World by {name}</h1>

        <input type='text' value={'Eric'} onClick={(event) => HandleeEvenClick(event)} />
        <button type='buttion' onClick={(event) => HandleeEvenClick(event)}>Click me</button>

      </header>
    </div>
  );
}

export default App;
