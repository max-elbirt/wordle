import React, {useContext, useEffect, useState} from "react";
import { GameBoardContext } from "../context/GameBoardContext";
import {DisplayCell} from "./DisplayCell";

interface RowProps {
    rowNum: number
}

export const DisplayRow: React.FC<RowProps> = ({rowNum}) => {

    const gameCtx = useContext(GameBoardContext);

    const generalArr = [0, 1, 2, 3, 4];

    return (
            <>
                {generalArr.map((j) => <DisplayCell colNum={j} rowNum={rowNum} rowFilled={gameCtx.rowFilled}/>)}
            </>
            )
}