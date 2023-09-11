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
