import logo from './logo.svg';
import './App.css';

function NewBotton(){
  return(<button>Ejemplo</button>)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         PRueba
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NewBotton/>
      </header>
    </div>
  );
}



export default App;
