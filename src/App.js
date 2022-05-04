import './App.css';
import Board from'./components/Board';
import KeyBoard from './components/KeyBoard';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>WORDLE</h1>
      </nav>
      <Board />
      <KeyBoard />

     </div>
  );
}

export default App;
