import React, {useContext} from "react";
import {LettersDisplay} from "./LettersDisplay";
import {KeyboardDisplay} from "./KeyboardDisplay";
import {GameBoardContext} from "../context/GameBoardContext";
import {useGameBoard} from "../hooks/useGameBoard";

export function GameBoard() {

    return (
        <>
            <GameBoardContext.Provider value={useGameBoard()}>
                <h1 className={'display-3'}>Wordle!</h1>
                <LettersDisplay/>
                <KeyboardDisplay/>
            </GameBoardContext.Provider>
        </>
    )
}