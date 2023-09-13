import { Documentation } from "../../Components/Documentation";
import { Button } from "../../UIComponents/Button/Button";
import { DocumentationWrapper } from "../../Components/DocumentationWrapper";

export const ButtonDoc = () => {
  return (
    <DocumentationWrapper>
      <Documentation
        description="Button with default props"
        components={[
          <Button size="small">Hello</Button>,
          <Button size="medium">Hello</Button>,
          <Button size="large">Hello</Button>
        ]}
        title="Button"
        codeBlock={`<Button size="small">Hello</Button>\n<Button size="medium">Hello</Button>\n<Button size="large">Hello</Button>`}
      />
      <Documentation
        description="Contained Button"
        components={[
          <Button varient="contained" color="primary">
            Hello
          </Button>,
          <Button varient="contained" color="secondary">
            Hello
          </Button>,
          <Button varient="contained" disabled>
            Hello
          </Button>
        ]}
        title="Primary Button"
        codeBlock={`<Button varient="contained" color="primary">Hello</Button>\n<Button varient="contained" color="secondary">Hello</Button>\n<Button varient="contained" disabled>Hello</Button>`}
      />
      <Documentation
        description="Outlined Button"
        components={[
          <Button varient="outlined" color="primary">
            Hello
          </Button>,
          <Button varient="outlined" color="secondary">
            Hello
          </Button>,
          <Button varient="outlined" disabled>
            Hello
          </Button>
        ]}
        title="Outlined Button"
        codeBlock={`<Button varient="outlined" color="primary">Hello</Button>\n<Button varient="outlined" color="secondary">Hello</Button>\n<Button varient="outlined" disabled>Hello</Button>`}
      />
      <Documentation
        description="Text Button"
        components={[
          <Button varient="text" color="primary">
            Hello
          </Button>,
          <Button varient="text" color="secondary">
            Hello
          </Button>,
          <Button varient="text" disabled>
            Hello
          </Button>
        ]}
        title="Text Button"
        codeBlock={`<Button varient="text" color="primary">Hello</Button>\n<Button varient="text" color="secondary">Hello</Button>\n<Button varient="text" disabled>Hello</Button>`}
      />
    </DocumentationWrapper>
  );
};
