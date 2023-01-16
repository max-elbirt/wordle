import React from "react";
import { KeyboardCell } from "./KeyboardCell";

interface KeyboardProps {
    row: string[]
}

export const KeyboardRow = ({row}: KeyboardProps) => {

    return (
        <div className="keyboardRow"> 
            <>
                {row.map((letter) => <KeyboardCell valueKey={letter} />)}
            </>
        </div>
    )
}