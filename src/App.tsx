import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {useEffect, useState, useContext} from "react";
import {DisplayCell} from "./components/DisplayCell";
import {LettersDisplay} from "./components/LettersDisplay";
import {GameBoardContext} from "./context/GameBoardContext";
import 'bootstrap/dist/css/bootstrap.css'
import {useGameBoard} from "./hooks/useGameBoard";
import {KeyboardDisplay} from "./components/KeyboardDisplay";


function App() {

    const gameState = useGameBoard();

  // @ts-ignore
    return (
        <>
            <GameBoardContext.Provider value={useGameBoard()}>
                <h1>Wordle!</h1>
                <LettersDisplay/>
                <KeyboardDisplay/>
            </GameBoardContext.Provider>
        </>
  )
}

export default App;
