import { type Handlers } from "$fresh/server.ts";
import { generatePalette } from "utils/color.ts";

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
    generatePalette(bgDarkHex, bgLightHex, persoHex);
    return new Response(JSON.stringify({}));
  },
};
