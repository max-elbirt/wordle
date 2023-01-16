import React, { ReactNode } from "react";
import backspace from "../graphics/backspace-white.svg";
import { KeyboardRow } from "./KeyboardRow";

export const KeyboardDisplay = () => {
  const qwerty = "qwertyuiopasdfghjklzxcvbnm".toUpperCase();

  const qwertyArr = qwerty.split("");

  const firstRow = qwertyArr.slice(0, 10);

  const secondRow = qwertyArr.slice(10, 19);

  const thirdRow = qwertyArr.slice(20);

  const backSpaceImagePath = "../graphics/backspace.svg";

  thirdRow.push("backspace");
  thirdRow.unshift("Enter");

  return (
    <div id={"KeyboardDisplay"}>
      <>
        <div className="mt-5">
          <KeyboardRow row={firstRow} />
        </div>

        <div className="mt-1">
          <KeyboardRow row={secondRow} />
        </div>

        <div className="mt-1">
          <KeyboardRow row={thirdRow} />
        </div>
      </>
    </div>
  );
};
