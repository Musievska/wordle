import './App.css';
import Board from './components/Board';
import KeyBoard from './components/KeyBoard';
import React, { useState, createContext, useEffect } from 'react';
import { boardDefaultValue } from './components/Words';
import GameOver from './components/GameOver';

export const AppContext = createContext()

function App() {
  const [board, setBoard] = useState(boardDefaultValue);
  const [currentAttempt, setCurrentAttempt] = useState({ attempt: 0, letterPosition: 0 });
  const [correctWord, setCorrectWord] = useState('');
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessWord: false,
  });

  useEffect(() => {

  })

  const onEnter = () => {
    if (currentAttempt.letter !== 5) return;
    let currentWord = '';
    for (let i = 0; i < 5; i++){
      currentWord += board[currentAttempt.attempt][i];
    }

    if (currentWord === correctWord) {
      setGameOver({
        gameOver: true,
        guessedWord: true
      });
      return;
    }
    console.log(currentAttempt);
    if (currentAttempt.attempt === 5) {
      setGameOver({
        gameOver: true,
        guessedWord: false
      });
      return;
    }
  }

  const onDelete = () => {
    if (currentAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letter - 1] = '';
    setBoard(newBoard);
    setCurrentAttempt({ ...currentAttempt, letter: currentAttempt.letter - 1 });
  }

  const onSelectLetter = (key) => {
    if (currentAttempt.letter > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letter] = key;
    setBoard(newBoard);
    setCurrentAttempt({
      attempt: currentAttempt.attempt,
      letter: currentAttempt.letter + 1,
     });
  }

  return (
    <div className="App">
      <nav>
        <h1>WORDLE</h1>
      </nav>
      <AppContext.Provider value={{
        board,
        setBoard,
        currentAttempt,
        setCurrentAttempt,
        onEnter,
        onDelete,
        onSelectLetter, 
        correctWord,
        setDisabledLetters,
        disabledLetters,
        gameOver
      }}>
        <div className="game">
          <Board />
         {gameOver.gameOver ? <GameOver /> :<KeyBoard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
