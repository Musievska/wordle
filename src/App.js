import './App.css';
import Board from './components/Board';
import KeyBoard from './components/KeyBoard';
import { useState, createContext } from 'react';
import { boardDefaultValue } from './components/Words';

export const AppContext = createContext()

function App() {
  const [board, setBoard] = useState(boardDefaultValue);
  const [currentAttempt, setCurrentAttempt] = useState({ attempt: 0, letterPosition: 0 });

  return (
    <div className="App">
      <nav>
        <h1>WORDLE</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currentAttempt, setCurrentAttempt }}>
        <div className="game">
          <Board />
          <KeyBoard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
