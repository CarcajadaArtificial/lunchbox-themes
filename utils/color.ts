import { Color } from "color";

export const stringToHex = (str: string): string =>
  stringIsValidHex(str) ? Color.string(str).hex() : "";

export const stringIsValidHex = (str: string): boolean => {
  try {
    Color.string(str);
    return true;
  } catch (_e) {
    return false;
  }
};

export const generatePalette = (
  bgDarkHex: string,
  bgLightHex: string,
  persoHex: string,
): void => {
  console.log(bgDarkHex, bgLightHex, persoHex);
};
