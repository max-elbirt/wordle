import React, { useContext, useState, useEffect } from "react";
import { GameBoardContext } from "../context/GameBoardContext";

interface KeyboardCellProps {
  valueKey: string;
}

export const KeyboardCell: React.FC<KeyboardCellProps> = ({ valueKey }) => {

  const gameCtx = useContext(GameBoardContext);

  const handleOnClick = (e:any) => {
    const letter = e.target.value;
    const index = gameCtx.gameBoard.flat().indexOf('');
    const row = Math.trunc(index/5);
    const col = index%5;
    const newGameBoard = [...gameCtx.gameBoard,(gameCtx.gameBoard[row][col] = letter)]
    newGameBoard.pop();
    gameCtx.setGameBoard(newGameBoard);
  }

  return (
    <>
      {valueKey !== "backspace" && valueKey !== "Enter" ? (
        <button className="w-10" value={valueKey} onClick={handleOnClick}>
          {valueKey}
        </button>
      ) : (
        <button className="w-auto" value={valueKey} onClick={handleOnClick}>
          {valueKey}
        </button>
      )}
    </>
  );
};
