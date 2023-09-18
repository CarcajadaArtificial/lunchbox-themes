import { useEffect, useState } from "preact/hooks";
import { Input, Layout, Text } from "lunchbox";
import { stringIsValidHex, stringToHex } from "utils/color.ts";

interface iColorInput {
  selectedColor: string;
  onSelectColor: (hex: string) => void;
}

export default function ColorInput(props: iColorInput) {
  const { selectedColor, onSelectColor } = props;
  const [colorHex, setColorHex] = useState<string>(selectedColor);
  const [colorHexError, setColorHexError] = useState("");

  useEffect(() => {
    setColorHex(selectedColor);
  }, [selectedColor]);

  return (
    <div class="flex gap-3">
      <Input
        label="Hex"
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
              onSelectColor(inputValue);
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
          onSelectColor(inputValue);
        }}
        value={stringToHex(colorHex)}
      />
    </div>
  );
}
