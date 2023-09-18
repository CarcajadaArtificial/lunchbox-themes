import { Button, Layout, Markdown, Text } from "lunchbox";
import ColorInput from "islands/ColorInput/index.tsx";
import PaletteSelector from "islands/PaletteSelector/index.tsx";
import ResultCSS from "components/ResultCSS.tsx";
import { palette } from "utils/const.ts";
import { useState } from "preact/hooks";
import { bring } from "utils/utils.ts";
import type { findReq, findRes } from "api/generate.tsx";

export default function PaletteGeneratorForm() {
  const [darkbg, setDarkbg] = useState("#3d3640");
  const [lightbg, setLightbg] = useState("#eee6f2");
  const [personality, setPersonality] = useState("#089969");
  const [resultCSS, setResultCSS] = useState<string>("");

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
          onClick={async () => {
            const res = await bring<findReq, findRes>("/api/generate", "POST", {
              bgDarkHex: darkbg,
              bgLightHex: lightbg,
              persoHex: personality,
            }, "Error");

            if (res) {
              setResultCSS(res.css);
            }
          }}
          class="block mx-auto"
        >
          Generate theme
        </Button>
      </div>
      <ResultCSS
        copyToClipboard={(ev) => navigator.clipboard.writeText(resultCSS)}
        css={resultCSS}
      />
    </>
  );
}
