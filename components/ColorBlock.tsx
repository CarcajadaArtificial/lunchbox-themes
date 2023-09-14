import type { Colors } from "utils/types.ts";

interface iColorBlock {
  color: Colors | null;
  onSelectColor: (color: Colors) => void;
  selected?: boolean;
}

export default function (props: iColorBlock) {
  const { color, onSelectColor, selected } = props;
  return (
    <div class="color-block">
      <div
        class={`h-inherit aspect-square rounded ${
          color ? `clr-${color}` : ""
        } ${color === "blanco" || color === "obsidiana" ? "border-1" : null}`}
        title={color ? color : ""}
        style={selected ? "outline: 2px solid white; outline-offset: 2px;" : ""}
        onClick={color ? () => onSelectColor(color) : undefined}
      />
    </div>
  );
}
