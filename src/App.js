import './App.css';
import Board from './components/Board';
import KeyBoard from './components/KeyBoard';
import { useState, createContext } from 'react';
import { boardDefaultValue } from './components/Words';

export const AppContext = createContext()

function App() {
  const [board, setBoard] = useState(boardDefaultValue);
  const [currentAttempt, setCurrentAttempt] = useState({ attempt: 0, letterPosition: 0 });


  const onEnter = () => {
    if (currentAttempt.letterPosition !== 5) return;

    
  }

  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = '';
    setBoard(newBoard);
    setCurrentAttempt({ ...currentAttempt, letterPosition: currentAttempt.letterPosition - 1 });
  }

  const onSelectLetter = (key) => {
    if (currentAttempt.letterPosition > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = key;
    setBoard(newBoard);
    setCurrentAttempt({ ...currentAttempt, letterPosition: currentAttempt.letterPosition + 1 });
  }

  return (
    <div className="App">
      <nav>
        <h1>WORDLE</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currentAttempt, setCurrentAttempt, onEnter, onDelete, onSelectLetter }}>
        <div className="game">
          <Board />
          <KeyBoard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
