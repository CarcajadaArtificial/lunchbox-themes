import { Button, Layout, Text } from "lunchbox";
import ColorInput from "islands/ColorInput/index.tsx";
import PaletteSelector from "islands/PaletteSelector/index.tsx";
import { palette } from "utils/const.ts";
import { useEffect, useState } from "preact/hooks";

export default function PaletteGeneratorForm() {
  const [darkbg, setDarkbg] = useState("");
  const [lightbg, setLightbg] = useState("");
  const [personality, setPersonality] = useState("");

  return (
    <>
      <Layout type="full">
        <Text type="heading">Dark-mode background</Text>
      </Layout>
      <Layout type="halves" class="mb-24">
        <Text class="pr-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe rem
          distinctio similique nulla aperiam maxime illo ex enim natus. Esse,
          nesciunt error! Deleniti ad illum dolorum commodi dolor nemo
          reprehenderit!
        </Text>
        <div>
          <ColorInput
            selectedColor={darkbg}
            onSelectColor={(hex) => setDarkbg(hex)}
          />
          <PaletteSelector
            selectedColor={darkbg}
            onSelectColor={(color) => setDarkbg(palette[color].hex)}
          />
        </div>
      </Layout>
      <Layout type="full">
        <Text type="heading">Light-mode background</Text>
      </Layout>
      <Layout type="halves" class="mb-24">
        <Text class="pr-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe rem
          distinctio similique nulla aperiam maxime illo ex enim natus. Esse,
          nesciunt error! Deleniti ad illum dolorum commodi dolor nemo
          reprehenderit!
        </Text>
        <div>
          <ColorInput
            selectedColor={lightbg}
            onSelectColor={(hex) => setLightbg(hex)}
          />
          <PaletteSelector
            selectedColor={lightbg}
            onSelectColor={(color) => setLightbg(palette[color].hex)}
          />
        </div>
      </Layout>
      <Layout type="full">
        <Text type="heading">Personality</Text>
      </Layout>
      <Layout type="halves" class="mb-24">
        <Text class="pr-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe rem
          distinctio similique nulla aperiam maxime illo ex enim natus. Esse,
          nesciunt error! Deleniti ad illum dolorum commodi dolor nemo
          reprehenderit!
        </Text>
        <div>
          <ColorInput
            selectedColor={personality}
            onSelectColor={(hex) => setPersonality(hex)}
          />
          <PaletteSelector
            selectedColor={personality}
            onSelectColor={(color) => setPersonality(palette[color].hex)}
          />
        </div>
      </Layout>
      <div>
        <Button
          onClick={() =>
            console.log(
              `dark: ${darkbg}, light: ${lightbg}, perso: ${personality}`,
            )}
          class="block mx-auto"
        >
          Generate theme
        </Button>
      </div>
    </>
  );
}
