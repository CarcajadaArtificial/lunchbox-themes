import { Input, Text } from "lunchbox";
import type { Colors } from "utils/types.ts";
import {
  connectionPalette,
  hueLightnessPalette,
  palette,
} from "utils/const.ts";
import ColorBlock from "components/ColorBlock.tsx";
import { useState } from "preact/hooks";

interface iPaletteSelector {
  selectedColor: string;
  onSelectColor: (color: Colors) => void;
}

export default function PaletteSelector(props: iPaletteSelector) {
  const { selectedColor, onSelectColor } = props;
  const [ordered, setOrdered] = useState<boolean>(false);

  const selectedPalette = ordered ? hueLightnessPalette : connectionPalette;

  return (
    <div>
      <Input
        checked={ordered}
        oninput={(ev) => setOrdered((ev.target as HTMLInputElement).checked)}
        type="checkbox"
        label="order"
        tabIndex={-1}
      />
      <div class="mt-3 p-6 clr-obsidiana">
        <div class="grid grid-cols-9 gap-1">
          {selectedPalette.flat().map((color) => (
            <ColorBlock
              color={color}
              onSelectColor={onSelectColor}
              selected={color !== null && palette[color].hex === selectedColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
