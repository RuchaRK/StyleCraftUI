import styled from "@emotion/styled";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
  title: string;
  description: string;
  components: React.ReactNode[];
  codeBlock: string;
  direction?: "horizontal" | "vertical";
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;

const CodeBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e4e4e4;
  border-radius: 16px;
  overflow: hidden;
`;

const CodeWrapper = styled.div`
  display: flex;
  border-radius: 16px;
  padding: 16px;
  gap: 32px;
  align-items: center;
  justify-content: center;
`;

export const Documentation: React.FC<Props> = ({
  title,
  description,
  components,
  codeBlock,
  direction = "horizontal"
}) => {
  return (
    <MainWrapper>
      <h2>{title}</h2>
      <p>{description}</p>
      <CodeBlockWrapper>
        <CodeWrapper
          style={{
            flexDirection: direction === "horizontal" ? "row" : "column"
          }}
        >
          {components}
        </CodeWrapper>
        <SyntaxHighlighter
          customStyle={{
            width: "800px",

            textAlign: "left",
            fontFamily: "monospace",
            fontSize: "16px",
            padding: "16px"
          }}
          language="jsx"
          style={darcula}
        >
          {codeBlock}
        </SyntaxHighlighter>
      </CodeBlockWrapper>
    </MainWrapper>
  );
};
