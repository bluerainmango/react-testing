import React, { useState } from "react";
import "./App.css";

// Convert camel character into space + camel
// emilyYu => emily Yu
export function replaceCamelWithSpaces(colorName) {
  //* v1
  // let newArr = colorName.split("");

  // for (let i = 1; i < colorName.length; i++) {
  //   const char = colorName.charCodeAt(i);

  //   if (char >= 65 && char <= 90) {
  //     newArr.splice(i, 1, ` ${newArr[i]}`);
  //   }
  // }

  // return newArr.join("");

  //* v2.
  // return colorName.replace(/(?<=[a-zA-Z])(?=[A-Z])/g, " ");

  //* v3.
  return colorName.replace(/\B([A-Z])\B/g, ` $1`);
}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const test = replaceCamelWithSpaces("emilyYuEM");

  // useEffect(() => {
  //   if (disabled) {
  //     setButtonColor("gray");
  //   } else {
  //     setButtonColor("red");
  //   }
  // }, [disabled]);

  return (
    <div>
      {/* {console.log("test", test)} */}
      <button
        // style={{ backgroundColor: buttonColor }}
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type='checkbox'
        id='disable-button-checkbox'
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => {
          setDisabled(e.target.checked);
        }}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
