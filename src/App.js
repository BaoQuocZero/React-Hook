import logo from './logo.svg';
import './App.css';

import Nav from './views/Nav/Nav';

const App = () => {

  let name = "Bao";
  let obj = { name: "Quoc", god: "Trai Dat" }
  let link = "https://www.youtube.com/watch?v=Y9gTouaZJ5s&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=10"
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World by {name}</h1>
        <h1>Obj = {obj.name} god of {obj.god}</h1>
        <a href={link} target='_blank'>Video React</a>
        <p>{JSON.stringify(obj)}</p>
      </header>
    </div>
  );
}

export default App;
