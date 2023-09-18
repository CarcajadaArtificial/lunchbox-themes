import { Handlers, PageProps } from "$fresh/server.ts";
import { Footer, Header, Link, Main, Markdown, Text } from "lunchbox";
import PaletteGeneratorForm from "islands/PaletteGeneratorForm/index.tsx";

interface HomePageData {
  homeMd: string;
}

export const handler: Handlers<HomePageData> = {
  async GET(_req, ctx) {
    const homeMd = await Deno.readTextFile("./data/markdown/home.md");

    return ctx.render({ homeMd });
  },
};

export default function Home(props: PageProps<HomePageData>) {
  const { homeMd } = props.data;
  return (
    <div>
      <Header layout_type="full">
        <Markdown markdown_content={homeMd} />
      </Header>
      <Main>
        <PaletteGeneratorForm />
      </Main>
      <Footer layout_type="left">
        <Text>
          <>Powered by</>{"  "}
          <Link href="https://github.com/CarcajadaArtificial">Myself</Link>
        </Text>
      </Footer>
    </div>
  );
}
