import React, {useContext, useEffect, useCallback} from 'react'
import Key from './Key';
import { AppContext } from "../App";


function KeyBoard() {
    const {onEnter, onDelete, onSelectLetter, currentAttempt} = useContext(AppContext);

    const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const keys2 = ['A', 'B', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

    const handleKeyBoard = useCallback(
        (event) => {
            if (event.keyValue === 'ENTER') {
                onEnter();
            } else if (event.keyValue === 'DELETE') {
                onDelete();
            } else {
                keys1.forEach((key) => {
                    if (event.key.toLowerCase() === key.toLowerCase()) {
                        onSelectLetter(key);
                    }
                });
                keys2.forEach((key) => {
                    if (event.key.toLowerCase() === key.toLowerCase()) {
                        onSelectLetter(key);
                    }
                });
                keys3.forEach((key) => {
                    if (event.key.toLowerCase() === key.toLowerCase()) {
                        onSelectLetter(key);
                    }
                });
            }
        },
        [currentAttempt]
    );

    useEffect(() => {
        document.addEventListener('keydown', handleKeyBoard);
        return () => {
            document.removeEventListener('keydown', handleKeyBoard);
        }
    }, [handleKeyBoard]);

    return (
        <div className="keyboard" onKeyDown={handleKeyBoard}>
            <div className="line1">
                {keys1.map((key) => {
                    return <Key keyValue={key} />
                })}
            </div>
            <div className="line2">
                {keys2.map((key) => {
                    return <Key keyValue={key} />
                })}
            </div>
            <div className="line3">
                <Key keyValue={"ENTER"} bigKey />
                {keys3.map((key) => {
                    return <Key keyValue={key} />
                })}
                <Key keyValue={"DELETE"} bigKey />
            </div>
        </div>
    );
}

export default KeyBoard;