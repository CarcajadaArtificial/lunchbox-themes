import { useState } from "preact/hooks";
import { stringIsValidHex, stringToHex } from "utils/color.ts";
import { Input, Layout, Text } from "lunchbox";

// interface iColorInput {}

export default function ColorInput(/* props: iColorInput */) {
  const [colorHex, setColorHex] = useState<string>("");
  const [colorHexError, setColorHexError] = useState("");

  return (
    <div class="flex gap-3">
      <Input
        label="Hex color code"
        placeholder="#000"
        type="text"
        fwd={{ container: { class: "flex-1" } }}
        onkeyup={(ev: KeyboardEvent) => {
          const inputValue = (ev.target as HTMLInputElement).value;
          setColorHex(inputValue);
          if (
            inputValue.charAt(0) === "#" &&
            (inputValue.length === 4 || inputValue.length === 7)
          ) {
            if (stringIsValidHex(inputValue)) {
              setColorHexError("");
            } else {
              setColorHexError(`The color ${inputValue} is invalid.`);
            }
          } else {
            setColorHexError("");
          }
        }}
        error={colorHexError}
        value={colorHex}
      />
      <Input
        label="picker"
        type="color"
        oninput={(ev) => {
          const inputValue = (ev.target as HTMLInputElement).value;
          setColorHex(inputValue);
        }}
        value={stringToHex(colorHex)}
      />
    </div>
  );
}
