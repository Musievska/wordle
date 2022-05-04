import './App.css';
import Board from'./components/Board';
import KeyBoard from './components/KeyBoard';
import { useState,createContext } from 'react';
import { boardDefaultValue } from './components/Words';

export const AppContext = createContext()

function App() {
  const [board, setBoard] = useState(boardDefaultValue);

  return (
    <div className="App">
      <nav>
        <h1>WORDLE</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard }}>
      <Board />
      <KeyBoard />
      </AppContext.Provider>
     </div>
  );
}

export default App;
