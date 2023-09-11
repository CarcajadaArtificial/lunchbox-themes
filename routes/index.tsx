import { Footer, Header, Main, Text } from "lunchbox";
import IconColorPicker from "icons/color-picker.tsx";
import ColorInput from "islands/ColorInput/index.tsx";

export default function Home() {
  return (
    <div>
      <Header layout_type="full" banner>
        <Text type="display">Home</Text>
      </Header>
      <Main>
        <ColorInput
          title="Dark-mode background"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe rem
            distinctio similique nulla aperiam maxime illo ex enim natus. Esse,
            nesciunt error! Deleniti ad illum dolorum commodi dolor nemo
            reprehenderit!"
        />
        <ColorInput
          title="Light-mode background"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe rem
            distinctio similique nulla aperiam maxime illo ex enim natus. Esse,
            nesciunt error! Deleniti ad illum dolorum commodi dolor nemo
            reprehenderit!"
        />
        <ColorInput
          title="Personality color"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe rem
            distinctio similique nulla aperiam maxime illo ex enim natus. Esse,
            nesciunt error! Deleniti ad illum dolorum commodi dolor nemo
            reprehenderit!"
        />
      </Main>
      <Footer></Footer>
    </div>
  );
}
