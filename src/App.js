import logo from './logo.svg';
import './App.css';

function App() {
  return (<div>
    <h1>Train Tracks and Tangles</h1>
    <svg class="window" width="1000" height="500" viewBox="0 0 1000 500">
      <rect x="0" y="0" width="100%" height="100%" fill="#cccccc" />
    </svg>
    <div class="buttons">
      <button>Left Turn</button>
      <button>Straight</button>
      <button>Right Turn</button>
    </div>
  </div>);
}

export default App;
