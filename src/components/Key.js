import React, { useContext } from 'react';
import { AppContext } from '../App';

function Key({ keyValue, bigKey }) {
  const { board, setBoard, currentAttempt, setCurrentAttempt } = useContext(AppContext);

  const selectLetter = () => {
    if (currentAttempt.letterPosition > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue;
    setBoard(newBoard);
    setCurrentAttempt({ ...currentAttempt })
  }
  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
      {keyValue}
    </div>
  
  );
}

export default Key;