import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>🍱 Lunchbox Themes</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox-css@v0.0.26/dist/presets/standard/style.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox-css@v0.0.26/dist/modules/palette/style.css"
        />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
