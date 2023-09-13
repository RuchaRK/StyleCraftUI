import { Documentation } from "../../Components/Documentation";
import { FloatingActionButton } from "../../UIComponents/FloatingButton/FloatingActionButton";
import { DocumentationWrapper } from "../../Components/DocumentationWrapper";
import { AiFillHome, AiFillDelete } from "react-icons/ai";

export const FloatingButtonDoc = () => {
  return (
    <DocumentationWrapper>
      <Documentation
        description="IconButton with default props"
        components={[
          <FloatingActionButton>
            <AiFillDelete />
          </FloatingActionButton>
        ]}
        title="IconButton"
        codeBlock="<FloatingActionButton>Hello</FloatingActionButton>"
      />
      <Documentation
        description="Primary floating button with different sizes"
        components={[
          <FloatingActionButton color="primary" size="small">
            <AiFillHome />
          </FloatingActionButton>,
          <FloatingActionButton color="primary" size="medium">
            <AiFillHome />
          </FloatingActionButton>,
          <FloatingActionButton color="primary" size="large">
            <AiFillHome />
          </FloatingActionButton>,
          <FloatingActionButton color="primary" disabled>
            <AiFillHome />
          </FloatingActionButton>
        ]}
        title="Primary Floating Button"
        codeBlock={`<FloatingActionButton color="primary" size="small"><AiFillHome /></FloatingActionButton>\n<FloatingActionButton color="primary" size="medium"><AiFillHome /></FloatingActionButton>\n<FloatingActionButton color="primary" size="large"><AiFillHome /></FloatingActionButton>\n<FloatingActionButton color="primary" disabled><AiFillHome /><FloatingActionButton>`}
      />
      <Documentation
        description="Secondary floating button with different sizes"
        components={[
          <FloatingActionButton color="secondary" size="small">
            <AiFillHome />
          </FloatingActionButton>,
          <FloatingActionButton color="secondary" size="medium">
            <AiFillHome />
          </FloatingActionButton>,
          <FloatingActionButton color="secondary" size="large">
            <AiFillHome />
          </FloatingActionButton>,
          <FloatingActionButton color="secondary" disabled>
            <AiFillHome />
          </FloatingActionButton>
        ]}
        title="Secondary Floating button"
        codeBlock={`<FloatingActionButton color="secondary" size="small"><AiFillHome /></FloatingActionButton>\n<FloatingActionButton color="secondary" size="medium"><AiFillHome /></FloatingActionButton>\n<FloatingActionButton color="secondary" size="large"><AiFillHome /></FloatingActionButton>\n<FloatingActionButton color="secondary" disabled><AiFillHome /><FloatingActionButton>`}
      />
    </DocumentationWrapper>
  );
};
