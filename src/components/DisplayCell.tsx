import React, {EventHandler, useContext, useRef} from "react";
import {GameBoardContext} from "../context/GameBoardContext";
import {FocusCellContext} from "../context/FocusCellContext";
import '../styles/styles.css';

interface Props {
    rowNum: number,
    colNum: number,
}

export const DisplayCell: React.FC<Props> = ({rowNum, colNum}) => {
    const gameCtx = useContext(GameBoardContext);

    const handleTypingEvent: React.KeyboardEventHandler = (event: any) => {
        event.target.value = event.key;
        const newGameBoard = [...gameCtx.gameBoard,gameCtx.gameBoard[rowNum][colNum] = event.key];
        newGameBoard.pop();
        gameCtx.setGameBoard(newGameBoard);
        console.log(gameCtx.gameBoard);

        const nextInput = event.target.nextElementSibling;
        nextInput.focus();

        if (colNum === 4 && gameCtx.gameBoard[rowNum][4] !== '') {
            console.log('round over');
        }
    }

    return (
        <>
            {
            (rowNum === 0 && colNum === 0) ?
            <input type={"text"} onKeyDown={handleTypingEvent as React.KeyboardEventHandler}
                   defaultValue={''} data-row={rowNum} data-col={colNum} maxLength={1}
                   readOnly={true} autoFocus={true}/>
            : <input type={"text"} onKeyDown={handleTypingEvent as React.KeyboardEventHandler}
                     defaultValue={''} data-row={rowNum} data-col={colNum} maxLength={1}
                     readOnly={true}/>
            }
        </>
    )
}