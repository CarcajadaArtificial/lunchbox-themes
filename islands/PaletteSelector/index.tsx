import { Input, Text } from "lunchbox";
import { connectionPalette, hueLightnessPalette } from "utils/const.ts";
import ColorBlock from "components/ColorBlock.tsx";
import { useState } from "preact/hooks";

interface iPaletteSelector {
  selectedColor?: string;
}

export default function PaletteSelector(props: iPaletteSelector) {
  const { selectedColor } = props;
  const [ordered, setOrdered] = useState<boolean>(false);

  const palette = ordered ? hueLightnessPalette : connectionPalette;

  return (
    <div>
      <Text noMargins type="subheading">Lunchbox palette:</Text>
      <div class="p-6 clr-obsidiana">
        <Input
          checked={ordered}
          oninput={(ev) => setOrdered((ev.target as HTMLInputElement).checked)}
          type="checkbox"
          label="order"
          tabIndex={-1}
        />
        <div class="grid grid-cols-10 gap-1 mt-3">
          {palette.flat().map((color) => (
            <ColorBlock
              color={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
