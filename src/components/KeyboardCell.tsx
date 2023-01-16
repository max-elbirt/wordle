import React, { useContext, useState, useEffect } from "react";
import { Value } from "sass";
import { GameBoardContext } from "../context/GameBoardContext";

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

  useEffect(() => {
    const index = gameCtx.gameBoard.flat().indexOf("") - 1;
    const row = Math.trunc(index / 5);
    const col = index % 5;

    if (
      valueKey.toUpperCase() === gameCtx.word[col] &&
      gameCtx.gameBoard.flat().join("").includes(valueKey)
    ) {
      setInWordInPlace(true);
    }

    if (gameCtx.word.indexOf(valueKey.toUpperCase()) !== -1) {
      setInWordNotInPlace(true);
    } else if (gameCtx.word.indexOf(valueKey.toUpperCase()) === -1) {
      setInWordNotInPlace(false);
    }

    if (col === 4 && gameCtx.gameBoard[row][4] !== "") {
      gameCtx.setRowFilled([...gameCtx.rowFilled, row]);
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

  return (
    <>
      {valueKey !== "backspace" && valueKey !== "Enter" ? (
        <button
          className="w-10"
          value={valueKey}
          onClick={handleOnClick}
          style={{
            backgroundColor:
              gameCtx.rowFilled.includes(row) &&
              gameCtx.gameBoard[row].join("").includes(valueKey) &&
              (inWordInPlace ? "green" : inWordNotInPlace ? "pink" : "grey"),
          }}
        >
          {valueKey}
        </button>
      ) : (
        <button
          className="w-auto"
          value={valueKey}
          onClick={handleOnClick}
          style={{
            backgroundColor:
              gameCtx.rowFilled.includes(row) &&
              gameCtx.gameBoard[row].join("").includes(valueKey) &&
              (inWordInPlace ? "green" : inWordNotInPlace ? "pink" : "grey"),
          }}
        >
          {valueKey}
        </button>
      )}
    </>
  );
};
