import { Documentation } from "../../Components/Documentation";
import { IconButton } from "../../UIComponents/IconButton/IconButton";
import { DocumentationWrapper } from "../../Components/DocumentationWrapper";
import { AiFillHome, AiFillDelete } from "react-icons/ai";

export const IconButtonDoc = () => {
  return (
    <DocumentationWrapper>
      <Documentation
        description="IconButton with default props"
        components={[
          <IconButton>
            <AiFillDelete />
          </IconButton>
        ]}
        title="IconButton"
        codeBlock="<IconButton>Hello</IconButton>"
      />
      <Documentation
        description="Primary icon button with different sizes"
        components={[
          <IconButton color="primary" size="small">
            <AiFillHome />
          </IconButton>,
          <IconButton color="primary" size="medium">
            <AiFillHome />
          </IconButton>,
          <IconButton color="primary" size="large">
            <AiFillHome />
          </IconButton>,
          <IconButton color="primary" disabled>
            <AiFillHome />
          </IconButton>
        ]}
        title="Primary IconButton"
        codeBlock={`<IconButton color="primary" size="small"><AiFillHome /><IconButton>\n<IconButton color="primary" size="medium"><AiFillHome /><IconButton>\n<IconButton color="primary" size="large"><AiFillHome /><IconButton>\n<IconButton color="primary" disabled><AiFillHome /><IconButton>`}
      />
      <Documentation
        description="Secondary icon button with different sizes"
        components={[
          <IconButton color="secondary" size="small">
            <AiFillHome />
          </IconButton>,
          <IconButton color="secondary" size="medium">
            <AiFillHome />
          </IconButton>,
          <IconButton color="secondary" size="large">
            <AiFillHome />
          </IconButton>,
          <IconButton color="secondary" disabled>
            <AiFillHome />
          </IconButton>
        ]}
        title="Secondary IconButton"
        codeBlock={`<IconButton color="secondary" size="small"><AiFillHome /><IconButton>\n<IconButton color="secondary" size="medium"><AiFillHome /><IconButton>\n<IconButton color="secondary" size="large"><AiFillHome /><IconButton>\n<IconButton color="secondary" disabled><AiFillHome /><IconButton>`}
      />
    </DocumentationWrapper>
  );
};
