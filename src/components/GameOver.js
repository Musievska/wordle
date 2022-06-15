import React, { useContext } from 'react';
import { AppContext } from '../App';

function GameOver() {
    const {
        board,
        setBoard,
        currentAttempt,
        gameOver,
        onSelectLetter,
        correctWord,
        onDelete,
    } = useContext(AppContext);

    return (
        <div className="gameOver">
            <h3>
                {gameOver.guessWord
                    ? "You Guessed!"
                    : "Try Again!"
                }
            </h3>
            <h1>Correct Word: {correctWord}</h1>
            {gameOver.guessWord && (
                <h3>
                    You guessed in {currentAttempt.attempt} attempts
                </h3>
            )}
        </div>
    );
}

export default GameOver;