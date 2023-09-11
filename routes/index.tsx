import { Footer, Header, Main, Text } from "lunchbox";
import IconColorPicker from "icons/color-picker.tsx";
import PaletteGeneratorForm from "islands/PaletteGeneratorForm/index.tsx";

export default function Home() {
  return (
    <div>
      <Header layout_type="full" banner>
        <Text type="display">Home</Text>
      </Header>
      <Main>
        <PaletteGeneratorForm />
      </Main>
      <Footer></Footer>
    </div>
  );
}
