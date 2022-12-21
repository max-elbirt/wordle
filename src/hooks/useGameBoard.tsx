import React, {useState} from "react";

export function useGameBoard() {

    const arr: string[][] = Array.from(Array(5), () =>
        Array.from(Array(5) , () => ''));

    const [gameBoard, setGameBoard] = useState(arr);

    const word = 'hello';

    return {
        gameBoard,
        setGameBoard,
    }
}