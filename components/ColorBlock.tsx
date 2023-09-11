import type { Colors } from "utils/types.ts";

interface iColorBlock {
  color: Colors | null;
}

export default function (props: iColorBlock) {
  const { color } = props;
  return (
    <div class="color-block">
      <div
        class={`h-inherit aspect-square rounded ${
          color ? `clr-${color}` : ""
        } ${color === "blanco" || color === "obsidiana" ? "border-1" : null}`}
        title={color ? color : ""}
      />
    </div>
  );
}
