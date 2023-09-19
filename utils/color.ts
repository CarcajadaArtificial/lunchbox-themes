import { Color } from "color";
import { findPaletteColorNameByHex, paletteColorObjects } from "utils/const.ts";

export interface iColorScheme {
  bgPage: Color;
  bgPanel: Color;
  txtBase: Color;
  txtError: Color;
  bgError: Color;
  txtPersonality: Color;
  bgPersonality: Color;
  bgPanel50: Color;
  bgPanel35: Color;
  bgPanel15: Color;
  bgPersonality50: Color;
  bgPersonality35: Color;
  bgPersonality15: Color;
}

export interface iTheme {
  dark: iColorScheme;
  light: iColorScheme;
  perso: Color;
}

/**
 * Converts `str` into a standard hex color code (#FFF => #ffffff), returns an empty string if `str`
 * is an invalid hex color code.
 */
export const stringToHex = (str: string): string =>
  stringIsValidHex(str) ? Color.string(str).hex() : "";

/** @returns true only if `str` is a valid hex color code. */
export const stringIsValidHex = (str: string): boolean => {
  try {
    Color.string(str);
    return true;
  } catch (_e) {
    return false;
  }
};

/** Generates a color theme with palettes for dark and light color schemas. */
export const generateTheme = (
  bgDarkHex: string,
  bgLightHex: string,
  persoHex: string,
): iTheme => {
  const bgDarkColorObject = Color.string(bgDarkHex);
  const bgLightColorObject = Color.string(bgLightHex);
  const persoColorObject = Color.string(persoHex);

  return {
    dark: generateSingleColorSchemeTheme(
      persoColorObject,
      bgDarkColorObject,
    ),
    light: generateSingleColorSchemeTheme(
      persoColorObject,
      bgLightColorObject,
    ),
    perso: persoColorObject,
  };
};

/** Generates the colors in a single color scheme, light or dark. */
const generateSingleColorSchemeTheme = (
  persoColorObject: Color,
  backgroundColorObject: Color,
): iColorScheme => {
  const bgPanelColorObject = sortByEuclideanDistance(
    backgroundColorObject,
    sortByHueDifference(
      backgroundColorObject,
      paletteColorObjects.filter(
        compareFurtherLightness(backgroundColorObject),
      ),
    ).slice(0, 3),
  )[0];

  const txtBaseColorObject = sortByHueDifference(
    backgroundColorObject,
    paletteColorObjects.filter(
      compareIsContrasting(bgPanelColorObject, 7),
    ),
  )[0];

  const txtErrorColorObject = paletteColorObjects.filter(isRed).filter(
    compareIsContrasting(bgPanelColorObject, 7),
  )[0];

  const bgErrorColorObject = mixUntilContrasting(
    txtErrorColorObject,
    bgPanelColorObject,
    txtBaseColorObject,
  );

  const txtPersonalityColorObject = mixUntilContrasting(
    persoColorObject,
    txtBaseColorObject,
    bgPanelColorObject,
  );

  const bgPersonalityColorObject = mixUntilContrasting(
    persoColorObject,
    backgroundColorObject,
    txtBaseColorObject,
    0.3,
    8,
  );

  return {
    bgPage: backgroundColorObject,
    bgPanel: bgPanelColorObject,
    txtBase: txtBaseColorObject,
    txtError: txtErrorColorObject,
    bgError: bgErrorColorObject,
    txtPersonality: txtPersonalityColorObject,
    bgPersonality: bgPersonalityColorObject,
    bgPanel50: bgPanelColorObject.setAlpha(0.50),
    bgPanel35: bgPanelColorObject.setAlpha(0.35),
    bgPanel15: bgPanelColorObject.setAlpha(0.15),
    bgPersonality50: persoColorObject.setAlpha(0.50),
    bgPersonality35: persoColorObject.setAlpha(0.35),
    bgPersonality15: persoColorObject.setAlpha(0.15),
  };
};

/** Calculates the euclidean distance of the R.G.B. values of two Color objects. */
const calcEuclideanDistance = (colorA: Color, colorB: Color): number =>
  Math.sqrt(
    (colorA.red() - colorB.red()) ** 2 +
      (colorA.green() - colorB.green()) ** 2 +
      (colorA.blue() - colorB.blue()) ** 2,
  );

/** Sorts `colorArray` based on the euclidean distance of every item compared to the `targetColor`. */
const sortByEuclideanDistance = (
  targetColor: Color,
  colorArray: Color[],
): Color[] =>
  colorArray
    .flatMap((color) => {
      const distance = calcEuclideanDistance(targetColor, color);
      return distance !== 0 ? [{ color, distance }] : [];
    })
    .sort((a, b) => a.distance - b.distance)
    .map(({ color }) => color);

/** Calculates the difference in hue between two Color objects. */
const calcHueDifference = (colorA: Color, colorB: Color): number => {
  const diff = Math.abs(colorA.hue() - colorB.hue());
  return diff > 180 ? 360 - diff : diff;
};

/** Sorts `colorArray` based on the hue difference of every item compared to the `targetColor`. */
const sortByHueDifference = (
  targetColor: Color,
  colorArray: Color[],
): Color[] =>
  colorArray
    .flatMap((color) => {
      const diff = calcHueDifference(targetColor, color);
      return diff !== 0 ? [{ color, diff }] : [];
    })
    .sort((a, b) => a.diff - b.diff)
    .map(({ color }) => color);

/**
 * Used for filtering Color object lists. If the `targetColor` is a dark color, the filter would remove
 * all colors lighter than the target. The opposite would happen if the target color is a light color,
 * the filter would remove all the colors darker than the darget.
 */
const compareFurtherLightness = (
  targetColor: Color,
): (color: Color) => boolean =>
(color) =>
  targetColor.isDark()
    ? color.lightness() < targetColor.lightness()
    : color.lightness() > targetColor.lightness();

/**
 * Used for filtering Color object lists. It calculates the contrast between the `targetColor` and every
 * item in the array. It returns true if it is higher or equal than `minContrast`.
 */
const compareIsContrasting = (
  targetColor: Color,
  minContrast: number,
): (color: Color) => boolean =>
(color) => targetColor.contrast(color) >= minContrast;

/** Returns true if the `color` is redish enough. This function should be used in `array.filter()`. */
const isRed = (color: Color): boolean => {
  if (color.lightness() >= 95 || color.lightness() <= 5) {
    return false;
  }
  const hue = color.hue();
  return (hue >= 0 && hue <= 5) || (hue >= 330 && hue <= 360);
};

/** This function mixes `baseColor` with `mixColor` over and over until the result contrasts with
 * `contrastingColor`. The `weight` and `minContrast` are optional.
 */
const mixUntilContrasting = (
  baseColor: Color,
  mixColor: Color,
  contrastingColor: Color,
  weight = 0.3,
  minContrast = 7,
): Color => {
  const newColor = baseColor.mix(mixColor, weight);
  return contrastingColor.contrast(newColor) >= minContrast
    ? newColor
    : mixUntilContrasting(
      newColor,
      mixColor,
      contrastingColor,
      weight,
      minContrast,
    );
};
