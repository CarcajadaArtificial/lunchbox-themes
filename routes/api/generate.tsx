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
  --clr-bg-panel-50: ${dark.bgPanel50.hexa()};
  --clr-bg-panel-35: ${dark.bgPanel35.hexa()};
  --clr-bg-panel-15: ${dark.bgPanel15.hexa()};
}
@media (prefers-color-scheme: light) {
  :root{
    --clr-bg-page: ${light.bgPage.hex()};
    --clr-bg-panel: ${light.bgPanel.hex()};
    --clr-txt-base: ${light.txtBase.hex()};
    --clr-txt-error: ${light.txtError.hex()};
    --clr-bg-error: ${light.bgError.hex()};
    --clr-txt-personality: ${light.txtPersonality.hex()};
    --clr-bg-panel-50: ${light.bgPanel50.hexa()};
    --clr-bg-panel-35: ${light.bgPanel35.hexa()};
    --clr-bg-panel-15: ${light.bgPanel15.hexa()};
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
.clr-bg-panel-50 { 
  background-color: var(--clr-bg-panel-50);
}
.clr-bg-panel-35 { 
  background-color: var(--clr-bg-panel-35);
}
.clr-bg-panel-15 { 
  background-color: var(--clr-bg-panel-15);
}
`;

    return new Response(JSON.stringify({ css }));
  },
};
