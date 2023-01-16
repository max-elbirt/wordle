import { stringify } from "querystring";
import React, {useState} from "react";

export function useGameBoard() {

    const arr: string[][] = Array.from(Array(5), () =>
        Array.from(Array(5) , () => ''));

    const [gameBoard, setGameBoard] = useState(arr);

    const [rowFilled, setRowFilled] = useState([] as number[]);

    const [clickedValue, setClickedValue] = useState({value: '', clicked: false});

    const word = "MELON";

    return {
        gameBoard,
        setGameBoard,
        word,
        rowFilled,
        setRowFilled,
        clickedValue,
        setClickedValue
    }
}