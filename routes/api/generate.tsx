import { type Handlers } from "$fresh/server.ts";
import { generateTheme } from "utils/color.ts";

export type findReq = {
  bgDarkHex: string;
  bgLightHex: string;
  persoHex: string;
};

export type findRes = {
  css: string;
};

type Data = { session: Record<string, string> };

export const handler: Handlers<Data> = {
  async POST(req, ctx) {
    const { bgDarkHex, bgLightHex, persoHex } = await req.json() as findReq;
    const { dark, light, perso } = generateTheme(
      bgDarkHex,
      bgLightHex,
      persoHex,
    );

    const css = `
:root{
  --clr-personality: ${perso.hex()};
  --clr-bg-page: ${dark.bgPage.hex()};
  --clr-bg-panel: ${dark.bgPanel.hex()};
  --clr-txt-base: ${dark.txtBase.hex()};
  --clr-txt-error: ${dark.txtError.hex()};
  --clr-bg-error: ${dark.bgError.hex()};
  --clr-txt-personality: ${dark.txtPersonality.hex()};
  --clr-bg-personality: ${dark.bgPersonality.hex()};
  --clr-bg-error-30: ${dark.bgError30.hexa()};
  --clr-bg-panel-50: ${dark.bgPanel50.hexa()};
  --clr-bg-panel-35: ${dark.bgPanel35.hexa()};
  --clr-bg-panel-15: ${dark.bgPanel15.hexa()};
  --clr-bg-personality-60: ${dark.bgPersonality60.hexa()};
  --clr-bg-personality-45: ${dark.bgPersonality45.hexa()};
  --clr-bg-personality-30: ${dark.bgPersonality30.hexa()};
}
@media (prefers-color-scheme: light) {
  :root{
    --clr-bg-page: ${light.bgPage.hex()};
    --clr-bg-panel: ${light.bgPanel.hex()};
    --clr-txt-base: ${light.txtBase.hex()};
    --clr-txt-error: ${light.txtError.hex()};
    --clr-bg-error: ${light.bgError.hex()};
    --clr-txt-personality: ${light.txtPersonality.hex()};
    --clr-bg-personality: ${light.bgPersonality.hex()};
    --clr-bg-error-30: ${light.bgError30.hexa()};
    --clr-bg-panel-50: ${light.bgPanel50.hexa()};
    --clr-bg-panel-35: ${light.bgPanel35.hexa()};
    --clr-bg-panel-15: ${light.bgPanel15.hexa()};
    --clr-bg-personality-60: ${light.bgPersonality60.hexa()};
    --clr-bg-personality-45: ${light.bgPersonality45.hexa()};
    --clr-bg-personality-30: ${light.bgPersonality30.hexa()};
  } 
}
.clr-bg-page { 
  background-color: var(--clr-bg-page);
}
.clr-bg-panel { 
  background-color: var(--clr-bg-panel);
}
.clr-txt-base { 
  color: var(--clr-txt-base);
}
.clr-txt-error { 
  color: var(--clr-txt-error);
}
.clr-bg-error { 
  background-color: var(--clr-bg-error);
}
.clr-txt-personality { 
  color: var(--clr-txt-personality);
}
.clr-bg-personality { 
  background-color: var(--clr-bg-personality);
}
.clr-bg-error-30 { 
  background-color: var(--clr-bg-error-30);
}
.clr-bg-panel-50 { 
  background-color: var(--clr-bg-panel-50);
}
.clr-bg-panel-35 { 
  background-color: var(--clr-bg-panel-35);
}
.clr-bg-panel-15 { 
  background-color: var(--clr-bg-panel-15);
}
.clr-bg-personality-60 { 
  background-color: var(--clr-bg-personality-60);
}
.clr-bg-personality-45 { 
  background-color: var(--clr-bg-personality-45);
}
.clr-bg-personality-30 { 
  background-color: var(--clr-bg-personality-30);
}
`;

    return new Response(JSON.stringify({ css }));
  },
};
