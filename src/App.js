import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Navbar from './components/Navbar';
import { TableSVG } from './svg/TableSVG';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Button spanClass="pl-2" buttonClass="flex p-1 m-2 bg-black bg-opacity-10 rounded-md hover:bg-opacity-20" svg={TableSVG} text="Sample button"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
