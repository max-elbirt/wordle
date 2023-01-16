import { cp } from "fs";
import { stringify } from "querystring";
import React, {
  EventHandler,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { GameBoardContext } from "../context/GameBoardContext";
import "../styles/styles.css";

//*** need to move this interface into types folder */
interface DisplayProps {
  rowNum: number;
  colNum: number;
  rowFilled: number[];
}

export const DisplayCell: React.FC<DisplayProps> = ({
  rowNum,
  colNum,
}: DisplayProps) => {
  //these are the component's states
  const [inWordInPlace, setInWordInPlace] = useState(false);
  const [inWordNotInPlace, setInWordNotInPlace] = useState(false);

  //this context contains the gameboardHook with the word in play
  const gameCtx = useContext(GameBoardContext);

  useEffect(() => {
    if (
      gameCtx.gameBoard[rowNum][colNum].toUpperCase() === gameCtx.word[colNum]
    ) {
      setInWordInPlace(true);
    }

    if (
      gameCtx.word.indexOf(gameCtx.gameBoard[rowNum][colNum].toUpperCase()) !==
      -1
    ) {
      setInWordNotInPlace(true);
    } else if (
      gameCtx.word.indexOf(gameCtx.gameBoard[rowNum][colNum].toUpperCase()) ===
      -1
    ) {
      setInWordNotInPlace(false);
    }

    if (colNum === 4 && gameCtx.gameBoard[rowNum][4] !== "") {
      //update the row state so that the display components in this row know they can change colors
      gameCtx.setRowFilled([...gameCtx.rowFilled, rowNum]);
    }
  }, [gameCtx.gameBoard]);

  const handleTypingEvent = (event: any) => {
    event.target.value = event.key.toUpperCase();
    //not too sure I need this part anymore, bet keeping it for now
    const newGameBoard = [
      ...gameCtx.gameBoard,
      (gameCtx.gameBoard[rowNum][colNum] = event.key),
    ];
    newGameBoard.pop();
    gameCtx.setGameBoard(newGameBoard);
    console.log(gameCtx.gameBoard);

    //this block deals with moving the focus onKeyDown, and eventually tells us if game is over
    event.target.blur();
    const nextInput = event.target.nextElementSibling;
    nextInput ? nextInput.focus() : console.log("game over");

    //this conditional checks if event.key(a letter) is in the game-word and in the right position in the gameWord
    if (event.target.value === gameCtx.word[colNum]) {
      setInWordInPlace(true);
    } else if (gameCtx.word.includes(event.target.value)) {
      setInWordNotInPlace(true);
    }

    //this conditional checks if we've reached the end of a row
    if (colNum === 4 && gameCtx.gameBoard[rowNum][4] !== "") {
      //update the row state so that the display components in this row know they can change colors
      gameCtx.setRowFilled([...gameCtx.rowFilled, rowNum]);
    }
  };

  return (
    <>
      {rowNum === 0 && colNum === 0 ? (
        //this is done in order to focus on the first display component as page loads, notice the autofocus prop
        <input
          type={"text"}
          onKeyDown={handleTypingEvent as React.KeyboardEventHandler}
          value={gameCtx.gameBoard[rowNum][colNum].toUpperCase()}
          data-row={rowNum}
          data-col={colNum}
          maxLength={1}
          readOnly={true}
          autoFocus={true}
          style={{
            backgroundColor:
              gameCtx.rowFilled.includes(rowNum) &&
              (inWordInPlace ? "green" : inWordNotInPlace ? "pink" : "grey"),
          }}
        />
      ) : (
        <input
          type={"text"}
          onKeyDown={handleTypingEvent as React.KeyboardEventHandler}
          value={gameCtx.gameBoard[rowNum][colNum].toUpperCase()}
          data-row={rowNum}
          data-col={colNum}
          maxLength={1}
          readOnly={true}
          style={{
            backgroundColor:
              gameCtx.rowFilled.includes(rowNum) &&
              (inWordInPlace ? "green" : inWordNotInPlace ? "pink" : "grey"),
          }}
        />
      )}
    </>
  );
};
