import { Button, Layout, Text } from "lunchbox";
import ColorInput from "islands/ColorInput/index.tsx";
import PaletteSelector from "islands/PaletteSelector/index.tsx";

export default function PaletteGeneratorForm() {
  return (
    <>
      <Layout type="full">
        <Text type="heading">Dark-mode background</Text>
      </Layout>
      <Layout type="halves" class="mb-24">
        <Text class="pr-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe rem
          distinctio similique nulla aperiam maxime illo ex enim natus. Esse,
          nesciunt error! Deleniti ad illum dolorum commodi dolor nemo
          reprehenderit!
        </Text>
        <div>
          <ColorInput />
          <PaletteSelector />
        </div>
      </Layout>
      <Layout type="full">
        <Text type="heading">Light-mode background</Text>
      </Layout>
      <Layout type="halves" class="mb-24">
        <Text class="pr-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe rem
          distinctio similique nulla aperiam maxime illo ex enim natus. Esse,
          nesciunt error! Deleniti ad illum dolorum commodi dolor nemo
          reprehenderit!
        </Text>
        <div>
          <ColorInput />
          <PaletteSelector />
        </div>
      </Layout>
      <Layout type="full">
        <Text type="heading">Personality</Text>
      </Layout>
      <Layout type="halves" class="mb-24">
        <Text class="pr-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe rem
          distinctio similique nulla aperiam maxime illo ex enim natus. Esse,
          nesciunt error! Deleniti ad illum dolorum commodi dolor nemo
          reprehenderit!
        </Text>
        <div>
          <ColorInput />
          <PaletteSelector />
        </div>
      </Layout>
      <div>
        <Button class="block mx-auto">Generate theme</Button>
      </div>
    </>
  );
}
