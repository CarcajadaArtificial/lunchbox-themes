import { type Handlers } from "$fresh/server.ts";
import { generateTheme, iTheme } from "utils/color.ts";
import { findPaletteColorNameByHex } from "utils/const.ts";
import { Color } from "color";

export type findReq = {
  bgDarkHex: string;
  bgLightHex: string;
  persoHex: string;
};

export type findRes = unknown;

type Data = { session: Record<string, string> };

export const handler: Handlers<Data> = {
  async POST(req, ctx) {
    const { bgDarkHex, bgLightHex, persoHex } = await req.json() as findReq;
    const { dark, light, perso } = generateTheme(
      bgDarkHex,
      bgLightHex,
      persoHex,
    );

    console.log("== DARK THEME ===");
    console.log(
      Object.values(dark).map((tone) => findPaletteColorNameByHex(tone.hex())),
    );

    console.log("== LIGHT THEME ===");
    console.log(
      Object.values(light).map((tone) => findPaletteColorNameByHex(tone.hex())),
    );

    return new Response(JSON.stringify({}));
  },
};
