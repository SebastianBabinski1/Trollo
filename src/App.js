import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { DownloadSVG } from './svg/DownloadSVG';

function App() {
  return (
    <div className="App">
      <Button class="bg-red-400 flex" svg={DownloadSVG} text="Sample button"/>
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
