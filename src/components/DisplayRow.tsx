import React, {useEffect, useState} from "react";
import {DisplayCell} from "./DisplayCell";
import {FocusCellContext} from "../context/FocusCellContext";

interface Props {
    rowNum: number,
}

export const DisplayRow: React.FC<Props> = ({rowNum}) => {
    const generalArr = [0, 1, 2, 3, 4];

    return (
            <>
                {generalArr.map((j) => <DisplayCell colNum={j} rowNum={rowNum}/>)}
            </>
            )
}