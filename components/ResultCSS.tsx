import { Button, Layout, Markdown, Text } from "lunchbox";

interface iResultCSS {
  css: string;
  copyToClipboard?: (ev: Event) => void;
}

export default function (props: iResultCSS) {
  const { css, copyToClipboard } = props;

  if (css === "") {
    return <></>;
  }

  const markdownCSS = `\`\`\`css
${css}
\`\`\`
`;

  return (
    <Layout type="full">
      <div class="mt-12 flex items-end justify-between">
        <Text noMargins type="heading">Result CSS</Text>
        {copyToClipboard
          ? <Button onClick={copyToClipboard}>Copy to clipboard</Button>
          : null}
      </div>
      <Markdown markdown_content={markdownCSS} />
    </Layout>
  );
}
