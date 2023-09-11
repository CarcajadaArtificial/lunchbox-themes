export type Colors =
  | "azulejo"
  | "grafito"
  | "flan"
  | "chicle"
  | "ladrillo"
  | "arandano"
  | "jade"
  | "menta"
  | "acero"
  | "arena"
  | "mantequilla"
  | "chapopote"
  | "uva"
  | "musgo"
  | "cobalto"
  | "hielo"
  | "mota"
  | "vino"
  | "blanco"
  | "ambar"
  | "lapis"
  | "marino"
  | "fresa"
  | "cedro"
  | "bombon"
  | "pulpo"
  | "tortilla"
  | "manzana"
  | "turquesa"
  | "vinca"
  | "borrador"
  | "pitahaya"
  | "obsidiana"
  | "ajolote"
  | "limon"
  | "pastel"
  | "papel"
  | "hierro"
  | "magia"
  | "cielo"
  | "plata"
  | "lavanda"
  | "cajeta"
  | "alien"
  | "princesa"
  | "nube";

export type Palette = {
  [key in Colors]: ColorData;
};

export type ColorData = {
  hex: string;
  neighbors: Colors[];
};
