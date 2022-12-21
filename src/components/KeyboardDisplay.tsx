import React, {ReactNode} from "react";

export const KeyboardDisplay = () => {

    const qwerty = 'qwertyuiopasdfghjklzxcvbnm';

    const qwertyArr = qwerty.split("");

    const firstRow = qwertyArr.slice(0,10);

    const secondRow = qwertyArr.slice(10, 19);

    const thirdRow = qwertyArr.slice(20,);

    thirdRow.push('backspace');
    thirdRow.unshift('enter');

    return(
        <div id={'KeyboardDisplay'}>
            <div className={'keyboardRow mt-3'}>
                {firstRow.map((k) => <button className={'btn btn-outline-secondary'} data-key={k}>{k}</button>)}
            </div>
            <div className={'keyboardRow mt-1'}>
                {secondRow.map((k) => <button className={'btn btn-outline-secondary'} data-key={k}>{k}</button>)}
            </div>
            <div className={'keyboardRow mt-1'}>
                {thirdRow.map((k) => <button className={'btn btn-outline-secondary'} data-key={k}>{k}</button>)}
            </div>
        </div>
    )
}