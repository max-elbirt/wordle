import React from "react";
import {DisplayRow} from "./DisplayRow";

export function LettersDisplay() {

    const generalArr = [0, 1, 2, 3, 4];

    return (
        <div id={'letterDisplayWrapper'}>
        <div id={'letterDisplay'}>
            {generalArr.map((i) => <DisplayRow rowNum={i}/>)}
        </div>
        </div>
    )
}