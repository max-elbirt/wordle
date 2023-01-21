import React, { useContext, useState, useEffect } from "react";
import { Value } from "sass";
import { GameBoardContext } from "../context/GameBoardContext";
//branch 2
interface KeyboardCellProps {
  valueKey: string;
}

export const KeyboardCell: React.FC<KeyboardCellProps> = ({ valueKey }) => {
  //these are the component's states
  const [inWordInPlace, setInWordInPlace] = useState(false);
  const [inWordNotInPlace, setInWordNotInPlace] = useState(false);

  //this context contains the gameboardHook with the word in play
  const gameCtx = useContext(GameBoardContext);
  const index = gameCtx.gameBoard.flat().indexOf("") - 1;
  const row = Math.trunc(index / 5);
  const col = index % 5;

  useEffect(() => {

    if (
      valueKey.toUpperCase() === gameCtx.word[col] &&
      gameCtx.gameBoard[row][col] === valueKey
    ) {
      setInWordInPlace(true);
    }

    if (gameCtx.word.indexOf(valueKey.toUpperCase()) !== -1) {
      setInWordNotInPlace(true);
    } else if (gameCtx.word.indexOf(valueKey.toUpperCase()) === -1) {
      setInWordNotInPlace(false);
    }
  }, [gameCtx.gameBoard]);

  const handleOnClick = (e: any) => {
    console.log("clicked");
    const letter = e.target.value;
    const index = gameCtx.gameBoard.flat().indexOf("");
    const row = Math.trunc(index / 5);
    const col = index % 5;
    const newGameBoard = [
      ...gameCtx.gameBoard,
      (gameCtx.gameBoard[row][col] = letter),
    ];
    newGameBoard.pop();
    gameCtx.setGameBoard(newGameBoard);
  };

  const classNameForLetterResultsWidthAuto = `w-auto ${
    gameCtx.rowFilled.includes(row) &&
    gameCtx.gameBoard[row].join("").includes(valueKey) &&
    (inWordInPlace ? "green" : inWordNotInPlace ? "pink" : "grey")
  }`;

  const classNameForLetterResultWithTen = `w-10 ${
    gameCtx.rowFilled.includes(row) &&
    gameCtx.gameBoard[row].join("").includes(valueKey) &&
    (inWordInPlace ? "green" : inWordNotInPlace ? "pink" : "grey")
  }`;

  return (
    <>
      {valueKey !== "backspace" && valueKey !== "Enter" ? (
        <button
          className={classNameForLetterResultWithTen}
          value={valueKey}
          onClick={handleOnClick}
        >
          {valueKey}
        </button>
      ) : (
        <button
          className={classNameForLetterResultsWidthAuto}
          value={valueKey}
          onClick={handleOnClick}
        >
          {valueKey}
        </button>
      )}
    </>
  );
};
