import { Documentation } from "../../Components/Documentation";
import { DocumentationWrapper } from "../../Components/DocumentationWrapper";
import { Text } from "../../UIComponents/Text/Text";

export const TextDoc = () => {
  return (
    <DocumentationWrapper>
      <Documentation
        direction="vertical"
        description="Text component with all variants"
        components={[
          <Text variant="h1">Heading 1</Text>,
          <Text variant="h2">Heading 2</Text>,
          <Text variant="h3">Heading 3</Text>,
          <Text variant="h4">Heading 4</Text>,
          <Text variant="h5">Heading 5</Text>,
          <Text variant="h6">Heading 6</Text>,
          <Text variant="subtitle1">Subtitle 1</Text>,
          <Text variant="subtitle2">Subtitle 2</Text>,
          <Text variant="body1">Body 1</Text>,
          <Text variant="body2">Body 2</Text>,
          <Text variant="caption">Caption</Text>,
          <Text variant="button">Button</Text>,
          <Text variant="overline">Overline</Text>
        ]}
        title="Text"
        codeBlock={`<Text variant="h1">Heading 1</Text>\n<Text variant="h2">Heading 2</Text>\n<Text variant="h3">Heading 3</Text>\n<Text variant="h4">Heading 4</Text>\n<Text variant="h5">Heading 5</Text>\n<Text variant="h6">Heading 6</Text>\n<Text variant="subtitle1">Subtitle 1</Text>\n<Text variant="subtitle2">Subtitle 2</Text>\n<Text variant="body1">Body 1</Text>\n<Text variant="body2">Body 2</Text>\n<Text variant="caption">Caption</Text>\n<Text variant="button">Button</Text>\n<Text variant="overline">Overline</Text>`}
      />
    </DocumentationWrapper>
  );
};
