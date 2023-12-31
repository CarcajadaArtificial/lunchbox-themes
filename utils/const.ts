import { Color } from "color";
import type { Colors, Palette } from "./types.ts";

// deno-fmt-ignore
export const palette: Palette = {
  azulejo:      { hex: "#1f84cc", neighbors: ["cielo", "cobalto"]               },
  grafito:      { hex: "#3d3640", neighbors: ["hierro", "chapopote"]            },
  flan:         { hex: "#fabb64", neighbors: ["tortilla", "ambar"]              },
  chicle:       { hex: "#f7577f", neighbors: ["bombon", "fresa"]                },
  ladrillo:     { hex: "#cc5f29", neighbors: ["ambar", "arandano"]              },
  arandano:     { hex: "#66050d", neighbors: ["ladrillo", "manzana", "vino"]    },
  jade:         { hex: "#0f474d", neighbors: ["turquesa", "cedro", "marino"]    },
  menta:        { hex: "#1fcccc", neighbors: ["hielo", "turquesa"]              },
  acero:        { hex: "#aca1b3", neighbors: ["plata", "hierro"]                },
  arena:        { hex: "#fff7cc", neighbors: ["mantequilla", "tortilla"]        },
  mantequilla:  { hex: "#f7ff99", neighbors: ["arena", "alien"]                 },
  chapopote:    { hex: "#241f26", neighbors: ["obsidiana", "grafito"]           },
  uva:          { hex: "#380899", neighbors: ["lavanda", "lapis"]               },
  musgo:        { hex: "#9eed77", neighbors: ["alien", "mota"]                  },
  cobalto:      { hex: "#1262b3", neighbors: ["azulejo", "lapis"]               },
  hielo:        { hex: "#7ae0f5", neighbors: ["menta"]                          },
  mota:         { hex: "#12b362", neighbors: ["musgo", "limon"]                 },
  vino:         { hex: "#400020", neighbors: ["pulpo", "arandano"]              },
  blanco:       { hex: "#ffffff", neighbors: ["papel"]                          },
  ambar:        { hex: "#f59149", neighbors: ["flan", "ladrillo", "cajeta"]     },
  lapis:        { hex: "#000066", neighbors: ["cobalto", "uva", "marino"]       },
  marino:       { hex: "#030f33", neighbors: ["jade", "lapis"]                  },
  fresa:        { hex: "#e62e4d", neighbors: ["chicle", "manzana"]              },
  cedro:        { hex: "#00806a", neighbors: ["limon", "jade"]                  },
  bombon:       { hex: "#fc7ea8", neighbors: ["pastel", "chicle"]               },
  pulpo:        { hex: "#660546", neighbors: ["pitahaya", "vino"]               },
  tortilla:     { hex: "#ffea80", neighbors: ["arena", "flan"]                  },
  manzana:      { hex: "#b31b34", neighbors: ["fresa", "arandano"]              },
  turquesa:     { hex: "#088199", neighbors: ["menta", "jade"]                  },
  vinca:        { hex: "#afbbfa", neighbors: ["nube", "cielo"]                  },
  borrador:     { hex: "#df76ba", neighbors: ["pitahaya", "pastel"]             },
  pitahaya:     { hex: "#b3128a", neighbors: ["borrador", "pulpo"]              },
  obsidiana:    { hex: "#0c0a0d", neighbors: ["chapopote"]                      },
  ajolote:      { hex: "#e9abf5", neighbors: ["nube", "pastel"]                 },
  limon:        { hex: "#089969", neighbors: ["mota", "cedro"]                  },
  pastel:       { hex: "#fa96c8", neighbors: ["ajolote", "bombon", "borrador"]  },
  papel:        { hex: "#eee6f2", neighbors: ["blanco", "plata"]                },
  hierro:       { hex: "#796c80", neighbors: ["acero", "grafito"]               },
  magia:        { hex: "#a37af5", neighbors: ["princesa", "lavanda"]            },
  cielo:        { hex: "#7aadf5", neighbors: ["vinca", "azulejo"]               },
  plata:        { hex: "#d5ced9", neighbors: ["papel", "acero"]                 },
  lavanda:      { hex: "#6246eb", neighbors: ["magia", "uva"]                   },
  cajeta:       { hex: "#b36b24", neighbors: ["ambar"]                          },
  alien:        { hex: "#d0fa7d", neighbors: ["mantequilla", "musgo"]           },
  princesa:     { hex: "#d0bbfa", neighbors: ["nube", "magia"]                  },
  nube:         { hex: "#dfd9ff", neighbors: ["princesa", "ajolote", "vinca"]   },
};

// deno-fmt-ignore
export const hueLightnessPalette: (Colors | null)[][] = [
  [ null,     'vino',     null,      null,         null,  'jade',    'marino',  null,     'obsidiana' ],
  ['pulpo',   'arandano', null,      null,         null,   null,      null,    'lapis',   'chapopote' ],
  ['pitahaya','manzana', 'ladrillo','cajeta',     'cedro','turquesa','cobalto','uva',     'grafito'   ],
  ['borrador','fresa',    null,      null,        'limon', null,     'azulejo','lavanda', 'hierro'    ],
  [ null,     'chicle',  'ambar',    null,        'mota', 'menta',    null,    'magia',   'acero'     ],
  ['ajolote', 'bombon',  'flan',    'tortilla',   'musgo','hielo',   'cielo',  'princesa','plata'     ],
  [ null,     'pastel',  'arena',   'mantequilla','alien', null,     'vinca',  'nube',    'papel'     ],
  [ null,      null,      null,      null,         null,   null,      null,     null,     'blanco'    ],
];

// deno-fmt-ignore
export const connectionPalette: (Colors | null)[][] = [
  ['cielo',  'vinca','nube',    'ajolote','pastel',     'borrador','pitahaya',null,'obsidiana' ],
  ['azulejo', null,  'princesa', null,    'bombon',      null,     'pulpo',   null,'chapopote' ],
  ['cobalto', null,  'magia',    null,    'chicle',      null,     'vino',    null,'grafito'   ],
  ['lapis',  'uva',  'lavanda',  null,    'fresa',      'manzana', 'arandano',null,'hierro'    ],
  ['marino',  null,   null,      null,     null,         null,     'ladrillo',null,'acero'     ],
  ['jade',   'cedro','limon',   'mota',    null,        'cajeta',  'ambar',   null,'plata'     ],
  ['turquesa',null,   null,     'musgo',   null,         null,     'flan',    null,'papel'     ],
  ['menta',  'hielo', null,     'alien',  'mantequilla','arena',   'tortilla',null,'blanco'    ],
];

export const paletteColorObjects: Color[] = Object.values(palette)
  .map((color) => Color.string(color.hex));

export function findPaletteColorNameByHex(hexCode: string): Colors | string {
  for (const name in palette) {
    if (Object.prototype.hasOwnProperty.call(palette, name)) {
      if (palette[name as Colors].hex === hexCode) {
        return name as Colors;
      }
    } else {
      return hexCode;
    }
  }
  return hexCode;
}
